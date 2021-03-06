---
id: sw-sketch-macro-create-centerpoint-arc-slot
title:  Create a Centerpoint Arc Slot
---

In this post, I tell you about *how to create a Centerpoint Arc Slot through Solidworks VBA Macros* in a sketch.

The process is almost identical with previous **[Sketch - Create Straight Slot](sw-sketch-macro-create-straight-slot)** post. 

---

## Demo Video of Code on YouTube

I have not created the video for this post now. 

I will upload the video soon for this post and update the post after that.

---

## For Experience Macro Developer

If you are an experience **Solidworks Macro developer**, then you are looking for a specific code sample.

Below is the code for creating **A Centerpoint Arc Slot** from **Solidworks VBA Macro**.

```vb
' Creating Variable for Solidworks Slot
Dim mySketchSlot As SketchSlot
    
' Setting the value of a Centerpoint Arc slot
Set mySketchSlot = swSketchManager.CreateSketchSlot(swSketchSlotCreationType_e.swSketchSlotCreationType_arc, swSketchSlotLengthType_e.swSketchSlotLengthType_CenterCenter, 0.5, 0, 0, 0, -1, 0, 0, 1, 0, 0, -1, False)
```

First you need to **Create** a variable of `SketchSlot` type.

After creating variable, you need to set the value of this variable.

For this you used `CreateSketchSlot` method from **Solidworks Sketch Manager**.

This `CreateSketchSlot` method set the value of `SketchSlot` type variable.

The `CreateSketchSlot` method takes following parameters:

  - *SlotCreationType* : *Type of sketch slot*.

  - *SlotLengthType* : *Type of length of sketch slot*.

  - *Width* : Width of Slot

  - *X1* : X coordinate of the point 1, of the Slot

  - *Y1* : Y coordinate of the point 1, of the Slot

  - *Z1* : Z coordinate of the point 1, of the Slot

  - *X2* : X coordinate of the point 2, of the Slot

  - *Y2* : Y coordinate of the point 2, of the Slot

  - *Z2* : Z coordinate of the point 2, of the Slot

  - *X3* : X coordinate of the point 3, of the Slot

  - *Y3* : Y coordinate of the point 3, of the Slot

  - *Z3* : Z coordinate of the point 3, of the Slot

  - *CenterArcDirection* : We need to set the direction eiter Clockwise or Anti-Clockwise/Counterclockwise 

  - *AddDimension* : `True` to automatically add dimensions, `False` to not.

If you want a more detail explaination then please read further otherwise this will help you to **Create a Centerpoint Arc Slot From VBA Macro**.

---

## For Beginners Macro Developers

In this post, I tell you about `CreateSketchSlot` method from **Solidworks** `SketchManager` object.

This method is ***most updated*** method, I found in *Solidworks API Help*. 

So ***use this method*** if you want to create a new **Centerpoint Arc Slot**.

Below is the `code` sample for creating *a Centerpoint Arc Slot*.

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
      
  ' Creating a Centerpoint Arc slot
  Set mySketchSlot = swSketchManager.CreateSketchSlot(swSketchSlotCreationType_e.swSketchSlotCreationType_arc, swSketchSlotLengthType_e.swSketchSlotLengthType_CenterCenter, 0.5, 0, 0, 0, -1, 0, 0, 1, 0, 0, -1, False)

  ' De-select the Slot after creation
  swDoc.ClearSelection2 True
  
  ' Zoom to fit screen in Solidworks Window
  swDoc.ViewZoomtofit

End Sub
```

---

### Understanding the Code

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

For more information about selection method please visit **[Solidworks Macros - Selection Methods](sw-macro-selection-methods**) post.

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
      
' Creating a Centerpoint Arc slot
Set mySketchSlot = swSketchManager.CreateSketchSlot(swSketchSlotCreationType_e.swSketchSlotCreationType_arc, swSketchSlotLengthType_e.swSketchSlotLengthType_CenterCenter, 0.5, 0, 0, 0, -1, 0, 0, 1, 0, 0, -1, False
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

For creating a *Centerpoint Arc Slot*, I used following parameter Values:

  * *SlotCreationType* : `swSketchSlotCreationType_e.swSketchSlotCreationType_arc`
 
  Since we want to create a *Centerpoint Arc Slot* hence I select above value.

  * *SlotLengthType* : `swSketchSlotLengthType_e.swSketchSlotLengthType_CenterCenter`

  I want length of this Slot from *Center to Center* hence I select above value.

  * *Width* : **0.5**

  * *X1, Y1, Z1* : `0, 0, 0`

  For Point 1, I use (0, 0, 0) values, which is *origin* of Sketch.

  * *X2, Y2, Z2* : `-1, 0, 0`

  For Point 2, I use (-1, 0, 0) values, which is which is -1 point distance in X-direction.

  * *X3, Y3, Z3* : `1, 0, 0`

  For Point 2, I use (1, 0, 0) values, which is which is 1 point distance in X-direction.

  * *CenterArcDirection* : **-1**

  I want to create Clockwise Slot.

  * *AddDimension* : `False`

Below Image described **the Parameters for Centerpoint Arc Slot** in more detail.

![centerpoint-arc-slot-parameters](/assets/Solidworks_Images/slots/centerpoint-arc-slot-parameters.png)

This `CreateSketchSlot` method returns *Sketch Slot* interface i.e. `ISketchSlot` interface. 

This `ISketchSlot` interface has various **methods and properties** for *a Slot*.

For more detail about **methods and properties** of `ISketchSlot` interface you can visit [this page](http://help.solidworks.com/2019/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchSlot_members.html)

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

In the this line of code, we de-select the created Centerpointrc Slot.

For de-selecting, we use `ClearSelection2` method from our Solidworks document variable `swDoc`.

```vb
' Zoom to fit screen in Solidworks Window
swDoc.ViewZoomtofit
```

In this last line we use *zoom to fit* command.

For Zoom to fit, we use `ViewZoomtofit` method from our Solidworks document variable `swDoc`. 

After this our Solidworks VBA Macro ends the **Sub procedure** and we create **a Centerpoint Arc Slot**.

---

## VBA Language feature used in this post

In this post used some features of **VBA programming language**.

This section of post, has some brief information about the VBA programming language specific features.

1. We use **Option Explicit** for capturing un-declared variables.

If you want to read more about **Option Explicit** then please visit **[Declaring and Scoping of Variables](../vba/vba-variables-decl)**.

2. Then we create **variable** for different data types.

If you don't know about them, then please visit **[Variables](../vba/vba-variables)** and **[Data-types](../vba/vba-prog-concept#data-types-in-vba)** posts of this blog.

These posts will help you to understand what **Variables** are and how to use them.

3. Then we create **main Sub procedure** for our macro.

If you don't know about the **Sub procedure**, then I suggest you to visit **[VBA Sub and Function Procedures](../vba/vba-procedures)** and **[Executing Sub and Function Procedures](../vba/vba-procedures-exec)** posts of this blog.

These posts will help you to understand what **Procedures** are and how to use them.

4. In most part we create some variables and set their values. We set those values by using some **functions** provided from objects.

If you don't know about the **functions**, then you should visit **[VBA Functions](../vba/vba-functions)** and **[VBA Functions that do more](../vba/vba-functions-adv)** posts of this blog.

These posts will help you to understand what **functions** are and how to use them.

5. For creating **Centerpoint Arc Slot**, we use `CreateSketchSlot` function. This function take some input values in form of **VBA Constants**.

If you don't know about the **VBA Constants**, then you should visit **[VBA Constants](../vba/vba-constants)** post of this blog.

This posts will help you to understand what **VBA Constants** are and how to use them.

---

## Solidworks API Objects

In this post, for creating **Centerpoint Arc Slot**, we use *Solidworks API objects and their methods*.

This section contains the list of all **Solidworks Objects** used in this post.

I have also attached links of these **Solidworks API Objects** in **API Help website**.

If you want to explore those objects, you can use these links.

These Solidworks API Objects are listed below:

- **Solidworks Application Object**

If you want explore ***Properties and Methods/Functions*** of **Solidworks Application Object** object you can visit **[this link](http://help.solidworks.com/2019/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISldWorks_members.html)**.

- **Solidworks Document Object**

If you want explore ***Properties and Methods/Functions*** of **Solidworks Document Object** object you can visit **[this link](http://help.solidworks.com/2019/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2_members.html)**.

- **Solidworks Sketch Manager Object**

If you want explore ***Properties and Methods/Functions*** of this **Solidworks Sketch Manager Object** you can visit **[this link](https://help.solidworks.com/2017/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchManager_members.html)**.

- **Solidworks Sketch Slot Object**

If you want explore ***Properties and Methods/Functions*** of this **Solidworks Sketch Slot Object** you can visit **[this link](http://help.solidworks.com/2019/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchSlot_members.html)**.

---

Hope this post helps you to *create a Centerpoint Arc Slot* in Sketches with **Solidworks VBA Macros**.

For more such tutorials on **Solidworks VBA Macros**, do come to this blog.

Till then, Happy learning!!!
