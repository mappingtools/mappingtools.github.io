---
title: "Geometry Dashboard"
author: "OliBomby"
id: geometry-dashboard
---

Geometry Dashboard is a powerful tool that overlays geometrically relevant virtual objects on top of the osu! editor, allowing you to snap objects to these virtual points, lines, and circles. This allows for creating geometrically perfect patterns that would be much harder, or impossible, to achieve otherwise.

:::tip
You must specify your user config file in the Mapping Tools Preferences for this tool to function.
:::

## Core Concepts

Geometry Dashboard works by:

1.  **Reading the current state of the osu! editor.** This includes the currently visible hit objects, editor time, and editor window position.
2.  **Generating virtual objects based on these hit objects.** This is done using a set of configurable generators, which create virtual points, lines, and circles from the hit objects.
3.  **Displaying these virtual objects in an overlay on top of the osu! editor.** This overlay allows you to see the generated geometry and snap your cursor to it.

## User Interface

The Geometry Dashboard window is divided into several sections:

*   **Search:** A search bar to filter the generator list for ease of navigation.
*   **Toggle Buttons:** Allows users to toggle different functionalities.
    *   Select All
    *   Lock All
    *   Usability All
*   **Savestates Button:** Opens the [Savestates window](#savestates).
*   **Preferences Button:** Opens the [Preferences window](#preferences).
*   **Generators List:** Shows the list of available generators with options to enable or disable them, or configure generators' parameters.

## Virtual Geometry

Virtual geometry is what this tool is built around. They do not exist as real hit objects in the editor, rather, they exist as points that your cursor can hover over for accurate placement during mapping.

### Virtual Geometry States

Virtual Geometry are highly unique, with several notable states that can be toggled on or off. These include:

*   **Selected:** Makes the object active, ready to form new objects. You can toggle selection on hovered virtual objects using the selection hotkey. When highlighted these have a different color overlay and glow along the borders.
*  **Locked:** By locking an object this prevents it from dissapearing when the generator or backing object cease to exist. Good for ensuring some geometry can't be accidentally deleted. If locked the virtual geometry will appear greyed out.
*   **Usable:** Virtual geometry that has this on can be used by generators to generate additional geometry. If off, then generators will ignore this object and it will not spawn any object from the associated geometry. Unusable virtual objects will display with a dimmed brightness.
*   **Relevancy** A value that ranges from 0 to 1 indicating how relevant this geometry is. More relevancy appears more opaque.

## Generators

Generators are the core of Geometry Dashboard. They are responsible for creating virtual objects from hit objects and other virtual objects.

### Generic Generator Workflow

A generator works by:

1.  **Input Selection:** Each generator has a set of *dependencies* (required input types) and *input predicates*. The input predicate describes extra rules that virtual objects need to obey to be used by this generator. Geometry Dashboard scans the previous layers for objects matching the dependencies and satisfying the input predicates. These rules include properties like whether or not the objects must be selected or have a certain relevancy value.

2.  **Geometry Generation:** For every possible combination of selected input objects, the generator uses its generator methods to generate new virtual objects. The generator methods take the selected input objects as parameters and return one or more new virtual objects.

3.  **Layering:** Each new set of virtual objects are placed in a new layer. The number of layers can be set with the *Inception Level* in the Preferences. Virtual objects in lower layers can influence which virtual objects get created in the next more complex layers.

4.  **Updating:** Every time a change happens that requires Geometry Dashboard to recalculate, objects in the first layer get regenerated based on the *Update Mode* preference. Then the second more complex layer gets updated, the third, and so on.

To prevent the explosion of too many unwanted objects, generators come with a check where if two objects are close enough in the same layer they will be merged and sum their relevancy. You can change the closeness needed for two objects to merge together in the Preferences.

### List of Generators

Here is a list of all the available generators in Geometry Dashboard:

*   **Basic Generators:** These generators directly create virtual objects from hit objects. All have temporal positioning set to average time of base object.

    *   **Points on Circles and Slider Heads:** Generates a virtual point at the start position of circles and sliders.
    *   **Points on Slider Ends:** Generates a virtual point at the very end of sliders.
    *   **Points on Slider Anchors:** Generates virtual points along the anchors (red and white) of the sliders.
    *   **Points on Last Anchors:** Generates virtual points at the last curve point of the sliders.
    *   **Lines on Linear Sliders:** If the slider type is Linear, then a virtual line is formed from the Pos to the Curve Point. Time and Relevancy is the same as the base sliders.
    *   **Points on Blanket Centers:** Generates a point on the center of circle type sliders. Time and Relevancy is the same as the base sliders.
    *   **Circles on 3-Point Sliders:** Creates a circle shape based on the anchors of the sliders, for blanket/perfect curves. Time and Relevancy is the same as the base sliders.
    *   **Points on Slider Paths:** Generates many virtual points on slider paths. Use the Point Density setting to change how many points are created. This generator requires extra calculations for its output.
*   **Intermediate Generators:** These generators requires Basic Generators in order to work. These help form shapes or make guidelines.
    *   **Tangent Circles on Circle:** Generates virtual circles which intersect the first input circle in exactly one point.
    *   **Circles by Two Points:** Takes a pair of virtual points and generates a pair of virtual circles with their centers on each point. Their radius is equal to the spacing between the two points.
    *   **Equilateral Triangle from Two Points:** Takes a pair of virtual points and generates a virtual point on each side to make two equilateral triangles.
    *   **Equilateral Triangle from Two Points (Type II):** Same as regular Triangle Generator, though it has different positioning for the triangle formation.
    *   **Square from Two Points:** Takes a pair of virtual points and generates a virtual point on each side to make a single square.
    *   **Square from Two Points (Type II):** Takes a pair of virtual points and generates a pair of virtual points on each side to make two squares in total.
    *   **Line by Two Points:** Takes a pair of virtual points and generates a virtual line that connects the two points.
    *   **Average of Two Points:** Takes 2 virtual points, and calculates virtual point using the average of the points.
    *   **Average of Three Points:** Takes 3 virtual points, and calculates virtual point using the average of the points.
    *   **Scale & Rotate around a Fixed Point:** Spins and scales any virtual object around a fixed virtual point, you can configure the angle, scalar and extra rules for selecting the fixed point.
    *   **Parallel Lines:** Takes a pair of line and point and generates a virtual line across the point that is parallel to the line.
    *   **Perpendicular Lines:** Takes a pair of line and point and generates a virtual line across the point that is perpendicular to the line.
    *   **Bisector of Angles:** Takes a pair virtual lines and generates the bisector of the angle between those lines at the point of the intersection.
    *   **Bisector of Two Points:** Takes a pair virtual points and generates the bisector of those points.
    *    **Tangent Lines on Circle:** Takes a pair of virtual circle and point and generates virtual lines that stretch to the sides of the circle and pass through the point.
*   **Advanced Generators** More specialized generators that need additional configuration and can be used for advanced recursive patterning.
    *   **Intersection Points:** Takes a pair of virtual lines or circles and generates a virtual point on each of their intersections. This generator can be highly useful combined with other geometric generation methods. *Note:* Due to the computationally expensive nature of identifying intersections, performance can be heavily impacted when multiple complex drawings are active within the editor, take caution.
    *   **Successor of 2 Points:** Takes 2 virtual points and calculates the next virtual point using the same velocity. Can be used with "Points on Slider Paths" for more accurate curve prediction
    *   **Successor of 3 Points** Takes 3 virtual points and calculates the next virtual point using the same angle and velocity change.
    *   **Successor of 3 Points Reversed** Takes 3 virtual points and calculates the next virtual point using the same velocity change and opposite angle.
    *   **Successor of 4 Points** Takes 4 virtual points and calculates the next virtual point using the same angle, angle change, velocity change and change of velocity change.
    *   **Scale & Rotate around a Fixed Point:** Spins and scales any virtual object around a fixed virtual point, you can configure the angle, scalar and extra rules for selecting the fixed point.
    *   **Reflection across a Line:** Mirrors any virtual object over a virtual line where the virtual line is the symmetry axis.

## Generator Options

Each generator has a set of options that can be configured to control its behavior. These options are:

*   **Active:** Whether the generator is enabled or disabled. If a generator is disabled, it will not create any virtual objects.
*   **Sequential:** Makes the generator only take sequential objects as input. When active, it only generates pairs of virtual objects that are sequential in time. This drastically reduces the amount of geometry generates and can help prevent clutter.
*   **Deep:** Tells the generator to check not just the layer above but all applicable layers prior for use.
*   **Relevancy Ratio:** The base relevancy of virtual objects generated by this generator, ranging from 0 to 1. The actual relevancy of generated objects can vary depending on the Relevancy Ratio of other inputs.
*   **Generates Inheritable:** If true, generated objects are usable. If false, the objects will not be usable by any further generators.
*   **Input Selection Collection:** A set of rules for the kind of virtual objects the generator takes as input. See [Input Selection](#input-selection-in-detail) for more details.

### Specialized Generator settings

Certain advanced generators will have more unique options.

*   **Circle from Single Point:**
    *   *Radius:* The scale for the circle
*   **Points on Slider Paths:**
    *   *Points Density:* Specifies how many points will be generated per osu! pixels of sliderpath.
*  **Scale & Rotate around a Fixed Point:**
    *   *Angle:* the angle in degrees to rotate by.
    *   *Scalar:* the scalar for the uniform scaling.
    *   *Origin Input Selection:* Specifies extra rules that virtual objects need to obey to be used as the rotational origin point.
    *   *Other Input Selection:* Specifies extra rules for objects that are to be mirrored across the origin point.
* **Reflection across a Line**
    *   *Axis Input Selection* Specifies extra rules that virtual objects need to obey to be used as the axis by this generator.
    *   *Other Input Selection:* Specifies extra rules for objects that are to be mirrored across the axis.

### Input Selection in Detail

Input selection is the primary mechanism to control which virtual objects a generator will consider for its calculations. Each generator defines its required input types (e.g. Points, Lines) and you use input predicates to fine-tune the selection process based on the object's properties. Without properly configured input selections, generators will either generate too many irrelevant virtual objects or fail to generate necessary ones.

An selection predicate collection is a set of selection predicates. Only one of the selection predicates has to be satisfied in order to make the virtual object eligible as input.

When hovering over the Input Selection, click the plus button to add a new selection predicate. You will then see a number of settings that can further narrow down virtual geometry generations. These settings are:

*   **Need Selected:** If true, makes the generator take only selected virtual objects as input. Selected objects also are the first to be hovered over. This allows you to be very Selective with your creation.

*   **Need Locked:** With this enabled, the generator takes exclusively locked objects for geometry generation. If the object isn't locked then it will not recognize that object at all. Can be useful when using certain generators while locking others.

*   **Need Generated By This:** Will check if all virtual objects where generated by the generator itself. Can narrow geometry generations to just the geometry you want if done right.

*   **Need Generated Not By This:** Opposite selection filter where only virtual objects that where not generated by this generator will be considered.

*   **Min Relevancy:** Requires objects used as input to have at least a certain relevancy for them to be considered. Relevancy goes from 0 to 1 so setting to 0 disables it.


## Preferences

The Geometry Dashboard Preferences window allows you to customize various aspects of the tool's behavior and appearance:

*   **Hotkeys:**
    *   **Snap Key:** The key to hold down to enable cursor snapping to virtual objects.
    *   **Select Key:** The key to hold down to select virtual objects.
    *   **Lock Key:** The key to hold down to lock virtual objects.
    *   **Usability Key:** The key to hold down to toggle usability on virtual objects.
    *   **Refresh Key:** key to use to immediately refresh the hit object listing in the root layer.
*   **Offset:** Offsets all virtual objects relative to the editor screen. Can be used to fix scaling or positioning issues.
    *   **Left:** Offset for the left edge of the editor.
    *   **Top:** Offset for the top edge of the editor.
    *   **Right:** Offset for the right edge of the editor.
    *   **Bottom:** Offset for the bottom edge of the editor.
*   **Complexity:** number of recursive layers to generate. Can be used to mitigate performance concerns.
    *   **Inception Level:** Amount of layers generated based on base hit objects.
*   **Downkey:** Toggles which virtual objects are displayed.
    *   **Everything:** Displays all virtual objects. Includes those of the hit objects, children, and parents.
     *  **Parents and parents of parents:** Displays the ancestors of what the objects are being snapped to.
    *   **Direct parents:** Only displays direct parents of what the objects are being snapped to.
    *   **Children and children of children:** Displays all descendants or what the objects are being snapped to.
     *  **Direct children:** Displays the immediate children of what the objects are being snapped to.
*   **Upkey:** Toggles which virtual objects are displayed when the Snap Key is unpressed.
    *   **All visible:** Displays all hit objects based on what is configured in the Selection options.
    *   **Nothing:** Hides all objects when the Snap Key is unpressed.
*   **Selection:** Toggles which hit objects are used for generating virtual objects.
    *   **All visible:** Includes all available hit objects.
    *   **Visible or selected:** Uses visible hit objects unless there are selected hit objects, then uses all selected hit objects.
    *   **Selected only:** Uses hit objects that are selected in the editor.
*   **Updating:** Toggles when the virtual objects get updated.
    *   **Any change:** Updates whenever changes occur.
    *   **Time change:** Updates when the editor timer gets changed. Good for performance at the cost of responsiveness.
    *   **osu! activated:** Updates when the current osu! window is moved into focus.
    *   **Hotkey down:** Updates when the refresh hotkey is pressed.
*   **Behavior:** Additional behaviors for Geometry Dashboard.
    *   **Minimal diff:** how close virtual objects need to be before getting merged.
    *   **Keep running:** keeps Geometry Dashboard running even when the other tools are open.
    *   **See playfield:** shows the boundaries of the playfield overlaid on the editor.
    *   **Debug:** visualizes the boundaries of the editor overlaid on the editor. If the editor cannot be seen even with this on then that means it is outside of the editor's range.

### Virtual Geometry Options

Each virtual object type displayed in the editor can have its color, opacity, thickness, and dash style customized. This increases readability.

*   **Color:** What the color is of the border. Can also be copied from a color picker (click the HEX value to copy it)
*   **Opacity:** How transparent the object is.
*   **Thickness:** How thick the lines are which form the outlines of the virtual object.
*   **Dash:** Whether to have outlines that dash or are solid.

## Savestates

Savestates function like hotkey profiles. These profiles can be quickly switched to, instead of having to change the settings for every generator and the preferences manually. You can also connect a hotkey to a savestate to change them even more quickly.

To create a new savestate press the + Icon. Then you can give it a name and a hotkey. There are buttons to either save or load, this will save or modify the current settings.
