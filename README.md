<h1 align="center">
  🌊 Demon Slayer: The Hashira Archives
</h1>

<p align="center">
  An immersive, <strong>Awwwards-style</strong> pinned scrolling experience showcasing the Demon Slayer Corps.
  <br>
  Built with precision using <strong>GSAP ScrollTrigger</strong> and <strong>Lenis Smooth Scroll</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black" />
 
</p>

---
[![image.png](https://i.postimg.cc/7htFkCmN/image.png)](https://postimg.cc/JHJ63hwy)
[![image.png](https://i.postimg.cc/9MM1jLKQ/image.png)](https://postimg.cc/XZR9fknR) 
[![image.png](https://i.postimg.cc/ZKkgrhXq/image.png)](https://postimg.cc/grDNW1z9)

---
## ⚔️ About The Project

This project is a frontend development experiment inspired by modern **Awwwards** websites. It features a "card stacking" or "pinning" effect where sections layer over each other smoothly as the user scrolls. 

The content is themed around **Demon Slayer (Kimetsu no Yaiba)**, featuring the Hashiras and key characters with high-quality visuals and typography.

### 🌟 Key Features
- **Smooth Momentum Scrolling:** Integrated **Lenis** for that buttery smooth "inertial" scroll feel.
- **Pinned Section Animations:** Uses **GSAP ScrollTrigger** to pin cards in place while the next one slides over.
- **Minimalist Aesthetic:** Clean typography (`DM Sans` & `Manrope`) paired with **Remix Icons**.
- **Responsive Layout:** Adapts strictly to the viewport for a focused experience.

---

## 🛠️ Tech Stack

* **Structure:** Semantic HTML5
* **Styling:** Modern CSS3 (Flexbox/Grid, Z-index management)
* **Animation Library:** [GSAP (GreenSock)](https://gsap.com/) + ScrollTrigger Plugin
* **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
* **Icons:** [Remix Icon](https://remixicon.com/)
* **Fonts:** DM Sans & Manrope (Google Fonts)

---

## 🧠 Core Challenges & Solutions

Developing this pinned-scroll effect came with specific technical hurdles. Here is how I solved them:

### 1. The "Card Stacking" Logic (Z-Index Hell)
**The Challenge:** Making sure the upcoming card slides *over* the previous one, rather than pushing it up or scrolling past it.  
**The Solution:** I used GSAP's `ScrollTrigger` with `pin: true`. By calculating the `transform-origin` and dynamically managing the `z-index`, each card acts as a "sticky" layer that holds its position until the next card completely covers it.

### 2. Syncing Native Scroll with Animations
**The Challenge:** Heavy scroll animations often feel "jittery" or disconnected from the mouse wheel on standard browsers.  
**The Solution:** I implemented **Lenis**. It hijacks the native scroll behavior to add momentum/inertia. The tricky part was syncing Lenis's `requestAnimationFrame` loop with GSAP's `ScrollTrigger.update()` method to ensure no lag between the scroll input and the animation frame.

### 3. Image Optimization & Layout Shift
**The Challenge:** High-quality anime artwork caused Cumulative Layout Shift (CLS) during loading.  
**The Solution:** Used strict aspect-ratio containers and object-fit properties in CSS to reserve space for images before they load, ensuring the ScrollTrigger start/end points remain accurate.

---

## 🚀 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/demon-slayer-scroll.git](https://github.com/your-username/demon-slayer-scroll.git)
