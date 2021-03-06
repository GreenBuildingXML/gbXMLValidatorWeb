# Test Case 19 – HVAC System and Schedule (Optional)
## Test Description:
HVAC is an essential building system in every new and retrofit building construction. It is also a critical component for evaluating a building’s energy performance as well as indoor air quality. To enhance data interoperability, it is suggested that not only geometric but also HVAC data be successfully exported from a BIM to gbXML. This test case focuses on whether a BIM authoring tool, when the described data is available, is capable of exporting HVAC data to gbXML. The HVAC system is a simple gas-based furnace adapted from the description in the standard ASHRAE 90.1 Appendix C.
## Spaces / Rooms:
There is one space in this test model named “level_1_space_1”.
## Special Considerations:
1.	The model is 10’ x 10’ x 10’ (center line).
2.	HVAC shall have the following characteristics: 
a.	A constant-volume fan control with fan efficiency of 0.7, 
b.	An electrically-provided cooling with constant COP equal to 3.0, 
c.	A gas furnace with constant thermal efficiency equal to 0.8, 
d.	Zone design OA is 5.3 CFM/person and 0.64 CFM/m2,
e.	Design heating temperature is 70F and design cooling temperature is 74F
3.	The order of the equipment should be on/off or constant volume fan, direct expansion cooling coil, and gas furnace. The specification for each of the components are listed in Table 1, Table 2, Table 3 below. The operation schedule is detailed in Table 4 below.

### Space Volumes and Areas
| Name            | Volume    | Area  |
|-----------------|-----------|-------|
| level_1_space_1 | 784.00 CF | 87 SF |

### Table 1. Fan Properties
|     Property                 |     Unit    |     Value      |
|------------------------------|-------------|----------------|
|     Motor   in Air Stream    |     -       |     1          |
|     Air   Stream Fraction    |     -       |     0.9        |
|     Delta   P                |     Pa      |     75         |
|     Control                  |     -       |     Cycling    |
|     Efficiency               |     -       |     0.7        |

### Table 2. Cooling Coil Properties
|     Property              |     Unit      |     Value    |
|---------------------------|---------------|--------------|
|     Efficiency   (COP)    |     -         |     3.0      |
|     Capacity              |     kBtu/h    |     85       |

### Table 3. Heating Coil Properties
|     Property         |     Unit      |     Value         |
|----------------------|---------------|-------------------|
|     Efficiency       |     -         |     0.8           |
|     Energy   Type    |     -         |     NaturalGas    |
|     Capacity         |     kBtu/h    |     102           |

### Table 4. HVAC operation schedule (On/off schedule)
|     Schedule   Type    |     Time period     |     Value                   |
|------------------------|---------------------|-----------------------------|
|     Year               |     All weeks       |     Week schedule   type    |
|     Week               |     All days        |     Day schedule   type     |
|     Day                |     1-5 AM          |     0                       |
|                        |     6 AM – 10 PM    |     1                       |
|                        |     11-12PM         |     0                       |

## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model.
### Figure 2. Floor and Ceiling Plan View
Shows a typical floor plan to indicate dimensions and directions of the space with wall thickness. The dashed line represents the profile of the shading of the roof.

### Figure 3. Section View
Shows a typical section view to indicate positions and dimensions of the slab floor, the height of the roof, and the ceiling element.
