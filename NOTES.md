- Critical Rendering Path

The Critical Rendering Path (CRP) is the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into actual pixels on the screen. Understanding CRP is crucial for optimizing web performance.

Key Steps in the Critical Rendering Path:

1. DOM (Document Object Model) Construction

   - Browser parses HTML and creates the DOM tree
   - Each HTML tag becomes a node in the tree
   - DOM represents the structure of the document

2. CSSOM (CSS Object Model) Construction

   - Browser parses CSS and creates the CSSOM tree
   - CSS rules are processed and applied to DOM nodes
   - CSSOM is render-blocking (browser must wait for CSS to be fully loaded)

3. JavaScript Execution

   - JavaScript can modify both DOM and CSSOM
   - Scripts are parser-blocking by default
   - Can be made asynchronous with async/defer attributes

4. Render Tree Construction

   - Combines DOM and CSSOM
   - Only visible elements are included
   - Hidden elements (display: none) are excluded

5. Layout (Reflow)

   - Calculates exact position and size of each element
   - Determines viewport dimensions
   - Creates the box model for each element

6. Paint
   - Fills in pixels for each element
   - Draws text, colors, images, borders, etc.
   - Can be optimized using layers and compositing

Performance Optimization Tips:

- Minimize critical resources
- Reduce the number of critical bytes
- Optimize the order of critical resources
- Use async/defer for non-critical JavaScript
- Optimize CSS delivery
- Minimize render-blocking resources

- Effects of <script></script> placement in HTML

Script tag can be use in head, body or even inside a div. The spesific location depends on the functionality of the Javascript file being imported and the loading order requirements. However it's important to note that the order of loading is from top to bottom, which means the placement of the script tag will affect the loading order.

a browser parses an HTML file and encounters <script></script> tags, it downloads and parses the JavaScript files first before continuing to parse other HTML content. If the JavaScript file is particularly large or is loaded from an external resource, it may be affected by network transfer or external server delays, causing lengthy loading times that can block HTML page parsing and impact user experience.

Script Loading Attributes:

1. defer

   - Downloads the script in parallel while HTML parsing continues
   - Executes the script only after HTML parsing is complete
   - Maintains the order of execution for multiple deferred scripts
   - Best for scripts that depend on DOM elements
   - Example: <script src="script.js" defer></script>

2. async
   - Downloads the script in parallel while HTML parsing continues
   - Executes the script as soon as it's downloaded, regardless of HTML parsing
   - No guarantee of execution order for multiple async scripts
   - Best for independent scripts (analytics, ads, etc.)
   - Example: <script src="script.js" async></script>

Key Differences:

- defer: Guarantees execution order, waits for HTML parsing
- async: No execution order guarantee, runs as soon as downloaded
- Both: Allow parallel downloading without blocking HTML parsing
