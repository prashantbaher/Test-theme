---
id: sw-sketch-macro-move-or-copy-sketch-entities
title:  Move/Copy Sketch Entities
---

In this post, I tell you about **how to Move/Copy Sketch Entities using Solidworks VBA Macros** in a Sketch.

In this post, I explain about `MoveOrCopy` method from **Solidworks** `ModelDoc2`'s `Extension` object.

This method is ***most updated*** method, I found in *Solidworks API Help*. 

So ***use this method*** if you want to *MoveOrCopy Sketch Entities*.

This post is similar to previous **[Solidworks Macro - Edit Circular Sketch Pattern From VBA Macro](sw-sketch-macro-edit-circular-sketch-pattern)** post.

If you have not visited my previous **[Solidworks Macro - Edit Circular Sketch Pattern From VBA Macro](sw-sketch-macro-edit-circular-sketch-pattern)** post, then please do check-it if you want to learn Editing Circular Sketch Pattern from VBA Macros.

---

## Code Sample

Below is the `code` sample to *edit Circular Sketch Pattern*.

```vb
Option Explicit

' Create variable for Solidworks application
Dim swApp As SldWorks.SldWorks

' Create variable for Solidworks document
Dim swDoc As SldWorks.ModelDoc2

' Boolean Variable
Dim BoolStatus As Boolean

' Create variable for Solidworks Sketch Manager
Dim swSketchManager As SldWorks.SketchManager

' Create Variable for Solidworks Sketch Segment
Dim swSketchSegment As SldWorks.SketchSegment

' Main function of our VBA program
Sub main()

  ' Set Solidworks variable to Solidworks application
  Set swApp = Application.SldWorks
  
  ' Create string type variable for storing default part location
  Dim defaultTemplate As String

  ' Set value of this string type variable to "Default part template"
  defaultTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplatePart)

  ' Set Solidworks document to new part document
  Set swDoc = swApp.NewDocument(defaultTemplate, 0, 0, 0)
  
  '-----------------------UNIT CONVERSION----------------------------------------

  ' Local variables used as Conversion Factors
  Dim LengthConversionFactor As Double
  Dim AngleConversionFactor As Double
  
  ' Use a Select Case, to get the length of active Unit and set the different factors
  Select Case swDoc.GetUnits(0)       ' GetUnits function gives us, active unit
    
    Case swMETER    ' If length is in Meter
      LengthConversionFactor = 1
      AngleConversionFactor = 1
    
    Case swMM       ' If length is in MM
      LengthConversionFactor = 1 / 1000
      AngleConversionFactor = 1 * 0.01745329
    
    Case swCM       ' If length is in CM
      LengthConversionFactor = 1 / 100
      AngleConversionFactor = 1 * 0.01745329
    
    Case swINCHES   ' If length is in INCHES
      LengthConversionFactor = 1 * 0.0254
      AngleConversionFactor = 1 * 0.01745329
    
    Case swFEET     ' If length is in FEET
      LengthConversionFactor = 1 * (0.0254 * 12)
      AngleConversionFactor = 1 * 0.01745329
    
    Case swFEETINCHES     ' If length is in FEET & INCHES
      LengthConversionFactor = 1 * 0.0254  ' For length we use sama as Inch
      AngleConversionFactor = 1 * 0.01745329
    
    Case swANGSTROM        ' If length is in ANGSTROM
      LengthConversionFactor = 1 / 10000000000#
      AngleConversionFactor = 1 * 0.01745329
    
    Case swNANOMETER       ' If length is in NANOMETER
      LengthConversionFactor = 1 / 1000000000
      AngleConversionFactor = 1 * 0.01745329
    
    Case swMICRON       ' If length is in MICRON
      LengthConversionFactor = 1 / 1000000
      AngleConversionFactor = 1 * 0.01745329
  End Select

  '----------------------------------------------------------------

  ' Select Front Plane
  BoolStatus = swDoc.Extension.SelectByID2("Front Plane", "PLANE", 0, 0, 0, False, 0, Nothing, swSelectOption_e.swSelectOptionDefault)

  ' Set Sketch manager for our sketch
  Set swSketchManager = swDoc.SketchManager

  ' Insert a sketch into selected plane
  swSketchManager.InsertSketch True
  
  ' Circle Radius
  Dim circleRadius As Double
  circleRadius = 5 * LengthConversionFactor
  
  ' Set Sketch Segment value and Create a Circle
  Set swSketchSegment = swSketchManager.CreateCircleByRadius(0, 0, 0, circleRadius)
  
  ' Defining variables for Destination Co-ordinates
  Dim destinationCoOrdinateInXDir As Double, destinationCoOrdinateInYDir As Double
  
  ' Setting the values of Destination Co-ordinates in X & Y directions for Move
  destinationCoOrdinateInXDir = 10 * LengthConversionFactor
  destinationCoOrdinateInYDir = 10 * LengthConversionFactor
  
  ' Move circle
  swDoc.Extension.MoveOrCopy False, 1, False, 0, 0, 0, destinationCoOrdinateInXDir, destinationCoOrdinateInYDir, 0
  
  ' Setting the values of Destination Co-ordinates in X & Y directions for Copy
  destinationCoOrdinateInXDir = 15 * LengthConversionFactor
  destinationCoOrdinateInYDir = 15 * LengthConversionFactor
  
  ' Copy circle
  swDoc.Extension.MoveOrCopy True, 3, True, 0, 0, 0, destinationCoOrdinateInXDir, destinationCoOrdinateInYDir, 0
  
  ' De-select the lines after creation
  swDoc.ClearSelection2 True
  
  ' Show Front View after Circular Sketch Pattern
  swDoc.ShowNamedView2 "", swStandardViews_e.swFrontView
  
  ' Zoom to fit screen in Solidworks Window
  swDoc.ViewZoomtofit2
  
End Sub
```

---

### Understanding the Code

Now let us walk through **each line** in the above code, and **understand** the meaning and purpose of every line.

I also give some link so that you can go through them if there are anything I explained in **previous posts**.

```vb
Option Explicit
```

This line forces us to define every variable we are going to use. 

For more information please visit **[Solidworks Macros - Open new Part document](sw-macro-open-part)** post.

```vb
' Create variable for Solidworks application
Dim swApp As SldWorks.SldWorks
```

In this line, we create a variable which we named as `swApp` and the type of this `swApp` variable is `SldWorks.SldWorks`.

```vb
' Create variable for Solidworks document
Dim swDoc As SldWorks.ModelDoc2
```

In this line, we create a variable which we named as `swDoc` and the type of this `swDoc` variable is `SldWorks.ModelDoc2`.

```vb
' Boolean Variable
Dim BoolStatus As Boolean
```

In this line, we create a variable named `BoolStatus` as `Boolean` object type.

```vb
' Create variable for Solidworks Sketch Manager
Dim swSketchManager As SldWorks.SketchManager
```

In above line, we create variable `swSketchManager` for **Solidworks Sketch Manager**.

As the name suggested, a **Sketch Manager** holds variours methods and properties to manage *Sketches*.

To see methods and properties related to `SketchManager` object, please visit **[this page](https://help.solidworks.com/2017/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchManager_members.html)**.

```vb
' Create variable for Solidworks Sketch Segment
Dim swSketchSegment As SldWorks.SketchSegment
```

In this line, we Create a variable which we named as `swSketchSegment` and the type of this `swSketchSegment` variable is `SldWorks.SketchSegment`.

We create variable `swSketchSegment` for **Solidworks Sketch Segments**.

To see methods and properties related to `swSketchSegment` object, please visit **[this page](http://help.solidworks.com/2019/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchSegment_members.html)**.

These all are our global variables.

As you can see in code sample, they are **Solidworks API Objects**.

So basically I group all the **Solidworks API Objects** in one place.

I have also place `boolean` type object at top also, because after certain point we will *need* this variable frequently.

Thus, I have started placing it here.

Next is our `Sub` procedure which has name of `main`. 

This procedure hold all the *statements (instructions)* we give to computer.

```vb
' Set Solidworks variable to Solidworks application
Set swApp = Application.SldWorks
```

In this line, we set the value of our Solidworks variable `swApp`; which we define earlier; to Solidworks application.

```vb
' Create string type variable for storing default part location
Dim defaultTemplate As String
' Set value of this string type variable to "Default part template"
defaultTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplatePart)
```

In 1st statement of above example, we are defining a variable of `string` type and named it as `defaultTemplate`.

This variable `defaultTemplate`, hold the location the location of **Default Part Template**.

In 2nd line of above example. we assign value to our newly define `defaultTemplate` variable.

We assign the value by using a *Method* named `GetUserPreferenceStringValue()`. 

This `GetUserPreferenceStringValue()` method is a part of our main Solidworks variable `swApp`.

```vb
' Set Solidworks document to new part document
Set swDoc = swApp.NewDocument(defaultTemplate, 0, 0, 0)
```

In this line, we set the value of our `swDoc` variable to new document.

For **detailed information** about these lines please visit **[Solidworks Macros - Open new Part document](sw-macro-open-part)** post.

I have discussed them **thoroghly** in **[Solidworks Macros - Open new Part document](sw-macro-open-part)** post, so do checkout that post if you want to understand above code in more detail.

```vb
'-----------------------UNIT CONVERSION----------------------------------------

' Local variables used as Conversion Factors
Dim LengthConversionFactor As Double
Dim AngleConversionFactor As Double

' Use a Select Case, to get the length of active Unit and set the different factors
Select Case swDoc.GetUnits(0)       ' GetUnits function gives us, active unit
  
  Case swMETER    ' If length is in Meter
    LengthConversionFactor = 1
    AngleConversionFactor = 1
  
  Case swMM       ' If length is in MM
    LengthConversionFactor = 1 / 1000
    AngleConversionFactor = 1 * 0.01745329
  
  Case swCM       ' If length is in CM
    LengthConversionFactor = 1 / 100
    AngleConversionFactor = 1 * 0.01745329
  
  Case swINCHES   ' If length is in INCHES
    LengthConversionFactor = 1 * 0.0254
    AngleConversionFactor = 1 * 0.01745329
  
  Case swFEET     ' If length is in FEET
    LengthConversionFactor = 1 * (0.0254 * 12)
    AngleConversionFactor = 1 * 0.01745329
  
  Case swFEETINCHES     ' If length is in FEET & INCHES
    LengthConversionFactor = 1 * 0.0254  ' For length we use sama as Inch
    AngleConversionFactor = 1 * 0.01745329
  
  Case swANGSTROM        ' If length is in ANGSTROM
    LengthConversionFactor = 1 / 10000000000#
    AngleConversionFactor = 1 * 0.01745329
  
  Case swNANOMETER       ' If length is in NANOMETER
    LengthConversionFactor = 1 / 1000000000
    AngleConversionFactor = 1 * 0.01745329
  
  Case swMICRON       ' If length is in MICRON
    LengthConversionFactor = 1 / 1000000
    AngleConversionFactor = 1 * 0.01745329
End Select

'----------------------------------------------------------------
```

Above code sample shows how to **fix Solidworks API Unit issue**. 

We *1st* get the *current unit* of the part and apply the *switch* statements to update our *Length and Angle Conversion factors*. 

I have already explained in detail about **Fixing Solidworks API Unit Issue** in **[Fix Unit Issue](sw-sketch-macro-fix-unit-issue)** blog post. 

Do checkout above post for Fixing Solidworks API Issue.

```vb
' Select Front Plane
BoolStatus = swDoc.Extension.SelectByID2("Front Plane", "PLANE", 0, 0, 0, False, 0, Nothing, swSelectOption_e.swSelectOptionDefault)
```

In above line, we select the *front plane* by using `SelectByID2` method from `Extension` object.

For more information about selection method please visit **[Solidworks Macros - Selection Methods](sw-macro-selection-methods)** post.

```vb
' Set Sketch manager for our sketch
Set swSketchManager = swDoc.SketchManager
```

In above line, we set the *Sketch manager* variable to *current document's sketch manager*.

```vb
' Insert a sketch into selected plane
swSketchManager.InsertSketch True
```

In above line, we use `InsertSketch` method of *SketchManager* and give `True` value.

This method allows us to insert a sketch in selected plane.


```vb
' Circle Radius
Dim circleRadius As Double
circleRadius = 5 * LengthConversionFactor
```

In above code sample, we do following:

  1. Create a local variable named `circleRadius`, which is `Double` type.

  2. In 2nd line, we assign a value of **5** to our `circleRadius` variable, also we multiple with our `LengthConversionFactor` variable.

Since I am using *IPS unit system*, I want to create a circle of Radius *5 inch*.

```vb
' Set Sketch Segment value and Create a Circle
Set swSketchSegment = swSketchManager.CreateCircleByRadius(0, 0, 0, circleRadius)
```

In above line, we set the value of Solidworks Sketch Segment variable `swSketchSegment` by `CreateCircleByRadius` method from *Solidworks Sketch Manager*.

This `CreateCircleByRadius` method creates *a Circle* at given point with radius.

For more information about `CreateCircleByRadius` method, you can read my **[Solidworks Macro - Create Circle By Radius From VBA Macro](sw-sketch-macro-create-circle-by-radius)** post.

That post describe all the parameters we need for this `CreateCircleByRadius` method in details.

In above line, we create a Circle with:

  - **Circle Centerpoint** : At origin i.e. *(0, 0, 0)*

  - **Circle Radius** : *`circleRadius`*

```vb
' Defining variables for Destination Co-ordinates
Dim destinationCoOrdinateInXDir As Double, destinationCoOrdinateInYDir As Double
```

In above line of code, we create **two** variables of **`double`** type in *one single line*.

These variables we use for defining **Destination Co-ordinates**.

Variables Name:

  - `destinationCoOrdinateInXDir`

  - `destinationCoOrdinateInYDir`

```vb
' Setting the values of Destination Co-ordinates in X & Y directions for Move
destinationCoOrdinateInXDir = 10 * LengthConversionFactor
destinationCoOrdinateInYDir = 10 * LengthConversionFactor
```

In above line of code, we set the values of *Destination Co-ordinates* in **X & Y directions** for ***Move*** selected circle.

Variables Values:

  - `destinationCoOrdinateInXDir = 10 * LengthConversionFactor`

    *10" in X direction.*

  - `destinationCoOrdinateInYDir = 10 * LengthConversionFactor`

    *10" in Y direction.*

```vb
' Move circle
swDoc.Extension.MoveOrCopy False, 1, False, 0, 0, 0, destinationCoOrdinateInXDir, destinationCoOrdinateInYDir, 0
```

For "**Moving**" a sketch entity, we need `MoveOrCopy` method from **Solidworks** `ModelDoc2`'s `Extension` object.

This `MoveOrCopy` method takes following parameters as explained:

  - **Copy** : *`True` to copy the sketch entities, `False` to not.*

  - **NumCopies** : *Number of copies you want to create.*

  - **KeepRelations** : *`True` to keep sketch relations after Move or Copy operation, `False` to not.*

  - **BaseX** : *X coordinate of the base point from which to move the sketch entities.*

  - **BaseY** : *Y coordinate of the base point from which to move the sketch entities.*

  - **BaseZ** : *Z coordinate of the base point from which to move the sketch entities.*

  - **DestX** : *X coordinate of the destination point from which to move the sketch entities.*
  
  - **DestY** : *Y coordinate of the destination point from which to move the sketch entities.*

  - **DestZ** : *Z coordinate of the destination point from which to move the sketch entities.*

:::note
There are no return value after this function.
:::

---

## **Cases**

In this section, we will go through different cases by 

  - *Modifying different parameters*

  - *See images, before and after parameter modification*

---
  
### CASE 1 : Move Sketch Entities

In our code, if we want to *Move Sketch Entities*, then we need to use code sample as given below:

```vb
' Defining variables for Destination Co-ordinates
Dim destinationCoOrdinateInXDir As Double, destinationCoOrdinateInYDir As Double

' Setting the values of Destination Co-ordinates in X & Y directions for Move
destinationCoOrdinateInXDir = 10 * LengthConversionFactor
destinationCoOrdinateInYDir = 10 * LengthConversionFactor

' Move circle
swDoc.Extension.MoveOrCopy False, 1, False, 0, 0, 0, destinationCoOrdinateInXDir, destinationCoOrdinateInYDir, 0
```

In above line we **Move Sketch Entities** to new position i.e. *10" in X-Direction* and *10" in Y-Direction*.

In above code we need to set following parameters:

  - **Copy** : `False` to not create a copy.

  - **NumCopies** : *Number of copies you want to create to 1 which is itself.*

  - **KeepRelations** : *`True` to keep sketch relations after Move or Copy operation.*

  - **BaseX** : *X coordinate of the base point  = 0*

  - **BaseY** : *Y coordinate of the base point  = 0*

  - **BaseZ** : *Z coordinate of the base point  = 0*

  - **DestX** : *X coordinate of the destination  = 10"*
  
  - **DestY** : *Y coordinate of the destination point  = 10"*

  - **DestZ** : *Z coordinate of the destination point  = 0*  

***Example Images:***

Below image shows before and after we **Move Sketch Entitny**.

**Before Move Sketch Entitny**

![before-move-copy](/assets/Solidworks_Images/move-copy-sketch-entities/before-move-copy.png)

**After Move Sketch Entitny**

![after-move](/assets/Solidworks_Images/move-copy-sketch-entities/after-move.png)

---

### CASE 2 : Copy Sketch Entities

In our code, if we want to *Copy Sketch Entities*, then we need to use code sample as given below:

```vb
' Defining variables for Destination Co-ordinates
Dim destinationCoOrdinateInXDir As Double, destinationCoOrdinateInYDir As Double

' Setting the values of Destination Co-ordinates in X & Y directions for Move
destinationCoOrdinateInXDir = 15 * LengthConversionFactor
destinationCoOrdinateInYDir = 15 * LengthConversionFactor

' Copy circle
swDoc.Extension.MoveOrCopy True, 3, True, 0, 0, 0, destinationCoOrdinateInXDir, destinationCoOrdinateInYDir, 0
```

In above line we **Copy Sketch Entities** to new position i.e. *15" in X-Direction* and *15" in Y-Direction* for every copy of sketch.

This will more clear in below images when you scroll down.

In above code we need to set following parameters:

  - **Copy** : `True` to create a copy.

  - **NumCopies** : *Number of copies we want to create: 3*

  - **KeepRelations** : *`True` to keep sketch relations after Move or Copy operation.*

  - **BaseX** : *X coordinate of the base point  = 0*

  - **BaseY** : *Y coordinate of the base point  = 0*

  - **BaseZ** : *Z coordinate of the base point  = 0*

  - **DestX** : *X coordinate of the destination  = 15"*
  
  - **DestY** : *Y coordinate of the destination point  = 15"*

  - **DestZ** : *Z coordinate of the destination point  = 0*  

***Example Images:***

Below image shows before and after we **Copy Sketch Entitny**.

**Before Copy Sketch Entitny**

![before-move-copy](/assets/Solidworks_Images/move-copy-sketch-entities/before-move-copy.png)

**After Copy Sketch Entitny**

![after-copy](/assets/Solidworks_Images/move-copy-sketch-entities/after-copy.png)

---

**This is it !!!**

*I hope my efforts will helpful to someone!*

If you found anything to **add or update**, please let me know on my *e-mail*.

Hope this post helps you to *Move/Copy Sketch Entities* with Solidworks VBA Macros.

For more such tutorials on **Solidworks VBA Macro**, do come to this blog after sometime.

*If you like the post then please share it with your friends also.*

*Do let me know by you like this post or not!*

*Till then, Happy learning!!!*
