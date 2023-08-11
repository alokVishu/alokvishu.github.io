<template>
  <div class="d-flex justify-center ">
    <div style="margin-bottom: -5rem; margin-top: 2rem; border: 8px solid #fff; border-radius: 50%; z-index: 2;">
      <v-avatar :size="$vuetify.display.smAndDown ? 200 : 400">
        <v-img src="/img/alok.png" width="400" cover></v-img>
      </v-avatar>
    </div>
  </div>

  <v-sheet flat class="pt-16">
    <v-container>
      <v-card-text class="text-center mt-3">
        <h3 class="text-h3 font-weight-light mb-3">CREATIVE <span class="font-weight-bold">PORTFOLIO</span></h3>
        <h6 class="mx-auto text-h6 mb-6" style="max-width:500px;">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </h6>

        <v-btn color="primary" size="large" variant="outlined" rounded="0">Read More</v-btn>
      </v-card-text>
    </v-container>
  </v-sheet>

  <v-sheet>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card-text>
            <h2 class="text-h2 font-weight-light mb-10">I am <span class="font-weight-bold">Developer</span></h2>
            <v-img cover src="/img/coding.jpg"></v-img>
          </v-card-text>
        </v-col>

        <v-col cols="12" md="6">
          <v-card-text>
            <v-img src="/img/coding-guy.jpg" class="mb-6"></v-img>

            <v-btn size="large" rounded="0" color="primary" variant="outlined">Projects</v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <div class="w-100 bg-background" style="height: 300px; margin-top: -15rem;"></div>

  <v-sheet>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card-text>
            <h1 class="text-h1 text-sm-end text-center">
              we<br>
              build
              <br>
              <span class="font-weight-bold">digital</span>
            </h1>
          </v-card-text>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card-text class="d-flex flex-column justify-end h-100">
            <p class="text-h6">
              Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart
              money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You
              day real less till dear read. Considered use dispatched melancholy sympathize discretion led.
            </p>

            <div class="mt-6">
              <v-btn flat rounded="0" size="large" color="warning">Read More</v-btn>
            </div>
          </v-card-text>
        </v-col>

        <v-col cols="12" class="text-center">
          <v-divider style="border-width: 5px; border-radius: 6px;" class="my-10"></v-divider>

          <h1 style="max-width: 690px; line-height: 1.6;" class="text-h3 mx-auto">
            We design People Inspired Experiences that create positive change in people's lives.
          </h1>

          <div class="my-8">
            <v-icon size="50" icon="mdi-chevron-triple-down"></v-icon>
            <p class="mt-6 font-weight-bold">VIEW PORTFOLIO</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <v-sheet>
    <v-row no-gutters>
      <v-col cols="12" md="4" sm="6" v-for="i in 9">
        <div class="position-relative">
          <v-img src="/img/project-1.jpg" cover></v-img>
          <div class="project-name">
            <span>Project Name</span>
          </div>
        </div>
      </v-col>

      <v-col cols="12" class="text-center">
        <v-btn flat size="large" rounded="0" color="warning" class="mt-12">View More</v-btn>
      </v-col>

      <v-col cols="12" md="6">
        <v-card-text style="max-width: 470px;" class="mx-auto mt-16">
          <h5 class="text-h4 mb-6">
            <span class="font-weight-bold">Visual communication</span> for brands and people
          </h5>
          <h6 class="text-h6">
            Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Magna fringilla urna porttitor rhoncus
            dolor purus non enim praesent. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Tellus cras
            adipiscing enim eu turpis egestas pretium aenean.
          </h6>

          <v-btn flat size="large" rounded="0" color="warning" class="my-6">View More</v-btn>
        </v-card-text>
      </v-col>

      <v-col cols="12" md="6">
        <v-card-text style="max-width: 470px;" class="mx-auto mt-16">
          <h6 class="text-h6">
            Viverra nibh cras pulvinar mattis nunc sed. Pulvinar mattis nunc sed blandit libero. Rhoncus aenean vel elit
            scelerisque. Diam donec adipiscing tristique risus nec feugiat. Facilisis leo vel fringilla est ullamcorper
            eget nulla facilisi. Quis eleifend quam adipiscing vitae proin sagittis.
          </h6>
        </v-card-text>
      </v-col>
    </v-row>
  </v-sheet>

  <v-sheet class="position-relative">
    <v-parallax class="text-center" src="/img/material.jpg" style="max-height: 300px;">
    </v-parallax>
    <div class="get-in-touch">
      <p class="text-h6 text-white">
        We want to stay in touch with you! Please follow us on social media so we can keep in
        touch.
      </p>
      <br>

      <div>
        <v-btn class="me-4" color="white" icon variant="text">
          <v-icon size="48" icon="mdi-facebook"></v-icon>
        </v-btn>
        <v-btn class="me-4" color="white" icon variant="text">
          <v-icon size="48" icon="mdi-twitter"></v-icon>
        </v-btn>
        <v-btn class="me-4" color="white" icon variant="text">
          <v-icon size="48" icon="mdi-instagram"></v-icon>
        </v-btn>
        <v-btn color="white" icon variant="text">
          <v-icon size="48" icon="mdi-linkedin"></v-icon>
        </v-btn>
      </div>
    </div>
    <span class="overlay"></span>
  </v-sheet>
  <footer class="bg-secondary text-center pa-6">
    <p style="max-width: 417px;" class="mx-auto">Sample text. Click to select the text box. Click again or double click to
      start editing
      the text.</p>
  </footer>
</template>

<style  scoped>
.portfolio-cover-bg {
  height: 250px;
  opacity: .5;
}

.project-name {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  color: #fff;
  font-size: 24px;
  text-transform: uppercase;
  transition: all 500ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

.project-name:hover {
  background: orange;
  opacity: 1;
}

.overlay {
  background: #000;
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: 0.5;
}

.get-in-touch {
  position: absolute;
  inset: 0;
  margin: 0 auto;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  max-width: 670px;
}
</style>