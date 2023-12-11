<script setup>
// import logo from '@/assets/images/logo.svg'
</script>

<template>
  <!-- Navbar -->
  <header class="primary-header">
    <div class="container">
      <a href="#">
        <!-- Use require to resolve the path to your image -->
        <img :src="logo" alt="LogoPlaceholder" />
      </a>
      <nav class="primary-navigation">
        <ul role="list" class="">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <button class="button">Book a call</button>
    </div>
  </header>

  <main>
    <!-- This section is the hero intro, with a small intro to who the coach is on the left column and a professional picture on the right column -->
    <section>
      <div class="container">
        <div class="even-columns">
          <div>
            <h1 class="fs-primary-heading fw-bold">Alana S. W.</h1>
            <p>Life and Mindfulness Coach</p>
            <button class="button">Book a call</button>
          </div>
          <div>
            <img :src="photoIntro" alt="Photo Intro" />
          </div>
        </div>
      </div>
    </section>

    <!-- This section should be the heading for a 2/3 column layout where we mention the different kinds of coaching available. Might make sense to rename from even-columns to even-rows so that it displays as a header/page break -->
    <section>
      <div class="container">
        <div class="even-columns">
          <div>
            <h2 class="fs-secondary-heading fw-bold">Why coaching?</h2>
            <p>Small paragraph that acts as an overview of the benefits of coaching</p>
          </div>
          <div>
            <ul class="numbered-benefits" role="list">
              <li>
                <h3 class="fs-600 fw-bold">Benefit 1</h3>
                <p>Benefit insight</p>
              </li>
              <li>
                <h3 class="fs-600 fw-bold">Benefit 2</h3>
                <p>Benefit insight</p>
              </li>
              <li>
                <h3 class="fs-600 fw-bold">Benefit 3</h3>
                <p>Benefit insight</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials/Reviews carousel -->
    <section class="carousel">
      <h2 class="fs-secondary-heading">What they've said</h2>
      <!-- Carousel here -->
      <button class="button">Book a call</button>
    </section>

    <!-- Separate component from utility classes with | -->
    <section class="cta | background-color text">
      <div class="container">
        <div class="even-columns">
          <div>
            <p class="fs-secondary-heading fw-bold">Ready to make a change? Book a free session to find out</p>
          </div>
          <div>
            <button class="button" data-type="inverted">Book a call</button>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="primary-color text">
    <div class="container">
      <div class="even-columns">
        <div>
          <a href="#">
            <!-- Use require to resolve the path to your image -->
            <img :src="logo" alt="LogoPlaceholder" />
          </a>
          <ul role="list">
            <li><a aria-label="Email" href="#"></a></li>
            <li><a aria-label="Instagram" href="#"></a></li>
            <li><a aria-label="Facebook" href="#"></a></li>
            <li><a aria-label="LinkedIn" href="#"></a></li>
          </ul>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </footer>
</template>

