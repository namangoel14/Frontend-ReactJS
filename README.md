# Learning ReactJS*️⃣

# parcel
- Dev build
- building local server
- HMR -> Hot Module Replacement
- How parcel is doing HMR? -> it uses the File Watching Algorithm(Written in c++)
- Parcel caching thing for us(Faster Builds).
- Parcel will do Image Optimization as well.
- If we do the production build -> It will do the minification for our file also. 
- It will do bundling as well.
- It will do compression as well. 
- Consistent Hashing 
- It will do code splitting for us.
- Differential bundling -> support older browsers
- Parcel is doing diagnostic behind the scenes.
- It do error handling
- Parcel can do tree Shaking -> it will remove unused code for us.
- It creates and different dev and production bundles

# Function component
- A function which returns an JSX known as Functional component.
- Note:- We always have to define a variable with capital letter - this is the way where react can understand that it is the component. 

# Component Composition
- We can call another and different types of component into other component is known as component composition.

# JSX
- We inject and javasript code inside the JSX code.

# Our Food delivery Wireframe

/*  Low level planning for food ordering Application
 * Header
 * - Logo
 * - Navigation Items (About, Home etc.)
 * Body
 * - Search
 * - Location
 * - RestaurantContainer
 *   - RestaurantCard
 *      - cuisins
 *      - star rating
 *      - delivery timing
 * Footer
 * - CopyRights
 * - Address
 * - Contact
 */

 # Export and Import
 - There are two types of them:
 1. Naming and,
 2. Default

 Naming -> 
 export const variable = {};

 import {variable} from "../xyz";

 Default -> 

 export default component;

 import component from "xyz";