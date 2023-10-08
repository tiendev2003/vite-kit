<template>
  <section>
    <div class="card">
      <Timeline :value="events" align="alternate" class="customized-timeline">
        <template #marker="slotProps">
          <span
            class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
            :style="{ backgroundColor: slotProps.item.color }"
          >
            <i :class="slotProps.item.icon"></i>
          </span>
        </template>
        <template #content="slotProps">
          <Fieldset legend="Header" :toggleable="true">
            <template #legend>
              <div class="flex align-items-center text-primary">
                <span class="font-bold text-lg">
                  {{ slotProps.item.date }}</span
                >
              </div>
            </template>
            <template #togglericon>
              <div>
                <span class="pi pi-calendar mr-2"></span>
              </div>
            </template>
            <Card>
              <template #content>
                <Galleria
                  ref="galleria"
                  :value="images"
                  :responsiveOptions="galleriaResponsiveOptions"
                  :numVisible="7"
                  :circular="true"
                  containerStyle="max-width: 800px; margin: auto"
                >
                  <template #item="slotProps">
                    <Image
                      preview
                      :src="slotProps.item.itemImageSrc"
                      :alt="slotProps.item.alt"
                      style="width: 100%; display: block"
                    />
                  </template>
                  <template #thumbnail="slotProps">
                    <img
                      :src="slotProps.item.thumbnailImageSrc"
                      :alt="slotProps.item.alt"
                      tyle="width: 100%; display: block;"
                    />
                  </template>
                </Galleria>

                <p class="pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore sed consequuntur error repudiandae numquam deserunt
                  quisquam repellat libero asperiores earum nam nobis, culpa
                  ratione quam perferendis esse, cupiditate neque quas!
                </p>
                <Button label="Read more" text></Button>
              </template>
            </Card>
          </Fieldset>
        </template>
      </Timeline>
    </div>
  </section>
</template>

<script>
import PhotoService from "./../services/PhotoService";

export default {
  async mounted() {
    const res = await fetch("demo/data/photos.json");
    const d = await res.json();
    this.images = d.data;
    this.bindDocumentListeners();
  },
  data() {
    return {
      events: [
        {
          status: "Ordered",
          date: "15/10/2020 10:30",
          icon: "pi pi-shopping-cart",
          color: "#9C27B0",
          image: "game-controller.jpg",
        },
        {
          status: "Processing",
          date: "15/10/2020 14:00",
          icon: "pi pi-cog",
          color: "#673AB7",
        },
        {
          status: "Shipped",
          date: "15/10/2020 16:15",
          icon: "pi pi-shopping-cart",
          color: "#FF9800",
        },
        {
          status: "Delivered",
          date: "16/10/2020 10:00",
          icon: "pi pi-check",
          color: "#607D8B",
        },
      ],
      images: null,
      activeIndex: 0,
      showThumbnails: false,
      fullScreen: false,
      isAutoPlay: true,
    };
  },
  methods: {
    toggleAutoSlide() {
      this.isAutoPlay = !this.isAutoPlay;
    },
    onThumbnailButtonClick() {
      this.showThumbnails = !this.showThumbnails;
    },
    toggleFullScreen() {
      if (this.fullScreen) {
        this.closeFullScreen();
      } else {
        this.openFullScreen();
      }
    },
    onFullScreenChange() {
      this.fullScreen = !this.fullScreen;
    },
    openFullScreen() {
      let elem = this.$refs.galleria.$el;

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
      }
    },
    closeFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    },
    bindDocumentListeners() {
      document.addEventListener("fullscreenchange", this.onFullScreenChange);
      document.addEventListener("mozfullscreenchange", this.onFullScreenChange);
      document.addEventListener(
        "webkitfullscreenchange",
        this.onFullScreenChange
      );
      document.addEventListener("msfullscreenchange", this.onFullScreenChange);
    },
    unbindDocumentListeners() {
      document.removeEventListener("fullscreenchange", this.onFullScreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        this.onFullScreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        this.onFullScreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        this.onFullScreenChange
      );
    },
  },
  computed: {
    slideButtonIcon() {
      return this.isAutoPlay ? "pi pi-pause" : "pi pi-play";
    },
    galleriaClass() {
      return ["custom-galleria", { fullscreen: this.fullScreen }];
    },
    fullScreenIcon() {
      return `pi pi-window-maximize`;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.customized-timeline) {
  .p-card .p-card-content {
    padding: 0 !important;
  }

  .p-timeline-event:nth-child(even) {
    flex-direction: row !important;

    .p-timeline-event-content {
      text-align: left !important;
    }
  }

  .p-fieldset .p-fieldset-content {
    padding: 0 !important;
  }

  .p-timeline-event-opposite {
    display: none !important;
    flex: 0;
  }
}

::v-deep(.custom-galleria) {
  &.fullscreen {
    display: flex;
    flex-direction: column;

    .p-galleria-content {
      flex-grow: 1;
      justify-content: center;
    }
  }

  .p-galleria-content {
    position: relative;
  }

  .p-galleria-thumbnail-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .p-galleria-thumbnail-items-container {
    width: 100%;
  }

  .custom-galleria-footer {
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    color: #ffffff;

    > button {
      background-color: transparent;
      color: #ffffff;
      border: 0 none;
      border-radius: 0;
      margin: 0.2rem 0;

      &.fullscreen-button {
        margin-left: auto;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }

  .title-container {
    > span {
      font-size: 0.9rem;
      padding-left: 0.829rem;

      &.title {
        font-weight: bold;
      }
    }
  }
}
</style>
