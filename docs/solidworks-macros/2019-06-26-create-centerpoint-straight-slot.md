---
id: sw-sketch-macro-create-centerpoint-straight-slot
title:  Create a Centerpoint Straight Slot
---

In this post, I tell you about *how to create a Centerpoint Straight Slot through Solidworks VBA Macros* in a sketch.

The process is almost identical with previous **[Sketch - Create Straight Slot](sw-sketch-macro-create-straight-slot)** post.

In this post, I tell you about `CreateSketchSlot` method from **Solidworks** `SketchManager` object.

This method is ***most updated*** method, I found in *Solidworks API Help*. 

So ***use this method*** if you want to create a new **Centerpoint Straight Slot**.

Below is the `code` sample for creating *a Centerpoint Straight Slot*.

```vb
Option Explicit

' Creating variable for Solidworks application
Dim swApp As SldWorks.SldWorks
' Creating variable for Solidworks document
Dim swDoc As SldWorks.ModelDoc2
' Boolean Variable
Dim BoolStatus As Boolean
' Creating variable for Solidworks Sketch Manager
Dim swSketchManager As SldWorks.SketchManager

' Main function of our VBA program
Sub main()

  ' Setting Solidworks variable to Solidworks application
  Set swApp = Application.SldWorks
  
  ' Creating string type variable for storing default part location
  Dim defaultTemplate As String
  ' Setting value of this string type variable to "Default part template"
  defaultTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplatePart)

  ' Setting Solidworks document to new part document
  Set swDoc = swApp.NewDocument(defaultTemplate, 0, 0, 0)

  ' Selecting Front Plane
  BoolStatus = swDoc.Extension.SelectByID2("Front Plane", "PLANE", 0, 0, 0, False, 0, Nothing, swSelectOption_e.swSelectOptionDefault)
  
  ' Setting Sketch manager for our sketch
  Set swSketchManager = swDoc.SketchManager
  
  ' Inserting a sketch into selected plane
  swSketchManager.InsertSketch True
  
  ' Creating Variable for Solidworks Slot
  Dim mySketchSlot As SketchSlot
      
  ' Creating a Centerpoint Straight slot
  Set mySketchSlot = swSketchManager.CreateSketchSlot(swSketchSlotCreationType_e.swSketchSlotCreationType_center_line, swSketchSlotLengthType_e.swSketchSlotLengthType_CenterCenter, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, False)
  
  ' De-select the Slot after creation
  swDoc.ClearSelection2 True
  
  ' Zoom to fit screen in Solidworks Window
  swDoc.ViewZoomtofit

End Sub
```

---

## Understanding the Code

Now let us walk through *each line* in the above code, and **understand** the meaning of every line.

```vb
Option Explicit
```

This line forces us to define every variable we are going to use. 

For more information please visit **[Solidworks Macros - Open new Part document](sw-macro-open-part)** post.

```vb
' Creating variable for Solidworks application
Dim swApp As SldWorks.SldWorks
```

In this line, we are creating a variable which we named as `swApp` and the type of this `swApp` variable is `SldWorks.SldWorks`.

```vb
' Creating variable for Solidworks document
Dim swDoc As SldWorks.ModelDoc2
```

In this line, we are creating a variable which we named as `swDoc` and the type of this `swDoc` variable is `SldWorks.ModelDoc2`.

Next is our `Sub` procedure named as `main`. This procedure hold all the *statements (instructions)* we give to computer.

```vb
' Setting Solidworks variable to Solidworks application
Set swApp = Application.SldWorks
```

In this line, we are setting the value of our Solidworks variable `swApp` which we defined earlier to Solidworks application.

```vb
' Creating string type variable for storing default part location
Dim defaultTemplate As String
' Setting value of this string type variable to "Default part template"
defaultTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplatePart)
```

In 1st statement of above example, we are defining a variable of `string` type and named it as `defaultTemplate`.

This variable `defaultTemplate`, holds the location the location of **Default Part Template**.

In 2nd line of above example. we assign value to our newly define `defaultTemplate` variable.

We assign the value by using a *Method* named `GetUserPreferenceStringValue()`. 

This method is a part of our main Solidworks variable `swApp`.

```vb
' Setting Solidworks document to new part document
Set swDoc = swApp.NewDocument(defaultTemplate, 0, 0, 0)
```

In this line, we set the value of our `swDoc` variable to new document.

For **more detailed information** about above lines please visit **[Solidworks Macros - Open new Part document](sw-macro-open-part)** post. 

I have discussed them **thoroghly** in **[Solidworks Macros - Open new Part document](sw-macro-open-part)** post, so do checkout this post if you don't understand above code.

```vb
' Boolean Variable
Dim BoolStatus As Boolean

' Selecting Front Plane
BoolStatus = swDoc.Extension.SelectByID2("Front Plane", "PLANE", 0, 0, 0, False, 0, Nothing, swSelectOption_e.swSelectOptionDefault)
```

In 1st line, we create a variable named `BoolStatus` as `Boolean` object.

In next line, we select the *front plane* by using `SelectByID2` method from `Extension` object.

For more information about selection method please visit **[Solidworks Macros - Selection Methods](sw-macro-selection-methods)** post.

I have discussed about different *Selection methods* in details in **[Soldworks Macros - Selection Methods](sw-macro-selection-methods)** post, so do visit this post for more *Selection methods*.

```vb
' Creating variable for Solidworks Sketch Manager
Dim swSketchManager As SldWorks.SketchManager
```

In above line, we create variable `swSketchManager` for **Solidworks Sketch Manager**.

As the name suggested, a **Sketch Manager** holds variours methods and properties to manage *Sketches*.

To see methods and properties related to SketchManager object, please visit **[this page](https://help.solidworks.com/2017/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchManager_members.html)**.

```vb
' Setting Sketch manager for our sketch
Set swSketchManager = swDoc.SketchManager
```

In above line, we set the **Sketch manager** variable to current document's sketch manager.

```vb
' Inserting a sketch into selected plane
swSketchManager.InsertSketch True
```

In above line, we use `InsertSketch` method of *SketchManager* and give `True` value.

This method allows us to insert a sketch in selected plane.

```vb
' Creating Variable for Solidworks Slot
Dim mySketchSlot As SketchSlot
      
' Creating a Centerpoint Straight slot
Set mySketchSlot = swSketchManager.CreateSketchSlot(swSketchSlotCreationType_e.swSketchSlotCreationType_center_line, swSketchSlotLengthType_e.swSketchSlotLengthType_CenterCenter, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, False)
```

In above sample code, we 1st create a variable named `mySketchSlot` of type `SketchSlot`.

In 2nd line, we **set** the value of *SketchSlot* variable `mySketchSlot`.

We get this value from `CreateSketchSlot` method which is inside the `swSketchManager` variable.

`swSketchManager` variable is a type of **SketchManager**, hence we used `CreateSketchSlot` method from **SketchManager**.

This `CreateSketchSlot` method takes following parameters as explained:

*SlotCreationType* : *Type of sketch slot* as defined in `swSketchSlotCreationType_e`.

  There are 4 Different types of Slots we can create.

  * ***Straight Slot*** : `swSketchSlotCreationType_e.swSketchSlotCreationType_line` or **0**

  * ***Centerpoint straight Slot*** : `swSketchSlotCreationType_e.swSketchSlotCreationType_center_line` or **1**

  * ***Centerpoint arc Slot*** : `swSketchSlotCreationType_e.swSketchSlotCreationType_arc` or **2**

  * ***3-point arc Slot*** : `swSketchSlotCreationType_e.swSketchSlotCreationType_3pointarc` or **4**

*SlotLengthType* : *Type of length of sketch slot* as defined in `swSketchSlotLengthType_e`.

  There are 2 different types of Sketch slot length we can create.

  * ***Center to Center*** : `swSketchSlotLengthType_e.swSketchSlotLengthType_CenterCenter` or **0**

  * ***Full Length*** : `swSketchSlotLengthType_e.swSketchSlotLengthType_FullLength` or **1**

*Width* : Width of Slot

*X1* : X coordinate of the point 1, of the Slot

*Y1* : Y coordinate of the point 1, of the Slot

*Z1* : Z coordinate of the point 1, of the Slot

*X2* : X coordinate of the point 2, of the Slot

*Y2* : Y coordinate of the point 2, of the Slot

*Z2* : Z coordinate of the point 2, of the Slot

*X3* : X coordinate of the point 3, of the Slot

*Y3* : Y coordinate of the point 3, of the Slot

*Z3* : Z coordinate of the point 3, of the Slot

*CenterArcDirection* : We need to set the direction eiter Clockwise or Anti-Clockwise/Counterclockwise as follows:

  * ***Clockwise (CW)*** : -1

  * ***Anti-Clockwise/Counterclockwise (CCW)*** : 1

*AddDimension* : `True` to automatically add dimensions, `False` to not.

For **more details** about *Slot Parameter* you can visit **[this page](http://help.solidworks.com/2019/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isketchmanager~createsketchslot.html)**.

For creating a *Centerpoint Straight Slot*, I used following parameter Values:

  * *SlotCreationType* : `swSketchSlotCreationType_e.swSketchSlotCreationType_center_line`

  Since we want to create a *Centerpoint Straight Slot* hence I select above value.

  * *SlotLengthType* : `swSketchSlotLengthType_e.swSketchSlotLengthType_CenterCenter`

  I want length of this Slot from *Center to Center* hence I select above value.

  * *Width* : **1**

  * *X1, Y1, Z1* : `0, 0, 0`

  For Point 1, I use (0, 0, 0) values, which is *origin* of Sketch.

  * *X2, Y2, Z2* : `1, 0, 0`

  For Point 2, I use (1, 0, 0) values, which is which is 1 point distance in X-direction.

  * *X3, Y3, Z3* : `1, 1, 0`

  For Point 2, I use (1, 1, 0) values, which is which is 1 point distance in X-direction and 1 point distance in Y-direction.

  * *CenterArcDirection* : **1**

  I want to create Anti-Clockwise/Counterclockwise Slot.

  * *AddDimension* : `False`

Below Image described **the Parameters for Centerpoint Straight Slot** in more detail.

![centerpoint-straight-slot-parameters](/assets/Solidworks_Images/slots/centerpoint-straight-slot-parameters.png)

This `CreateSketchSlot` method returns *Sketch Slot* interface i.e. `ISketchSlot` interface. 

This `ISketchSlot` interface has various **methods and properties** for *a Slot*.

For more detail about **methods and properties** of `ISketchSlot` interface you can visit **[this page](http://help.solidworks.com/2019/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchSlot_members.html)**.

---

### NOTE

It is ***very important*** to remember that, when you give distance or any other numeric value in **Solidworks API**, Solidworks takes that numeric value in ***Meter only***.

*Solidworks API* does not care about your application's Unit systems.

For example, I works in ANSI system means "inches" for distance. 

But when I used Solidworks API through *VBA macros* or *C#*, I have to use **converted** numeric values.

Because Solidworks API output the distance in **Meter** only; which is not my requirement.

```vb
' De-select the Slot after creation
swDoc.ClearSelection2 True
```

In the this line of code, we de-select the created Centerpoint Straight Slot.

For de-selecting, we use `ClearSelection2` method from our Solidworks document variable `swDoc`.

```vb
' Zoom to fit screen in Solidworks Window
swDoc.ViewZoomtofit
```

In this last line we use *zoom to fit* command.

For Zoom to fit, we use `ViewZoomtofit` method from our Solidworks document variable `swDoc`. 

Hope this post helps you to *create a Centerpoint Straight Slot* in Sketches with Solidworks VB Macros.

For more such tutorials on **Solidworks VBA Macros**, do come to this blog after sometime.

Till then, Happy learning!!!

