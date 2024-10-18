<script setup>
    import { onMounted, onUnmounted } from "vue";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { Suspense } from "vue";

    const page = ref();
    const slideUpPanel = ref();
    const hero = ref();
    const aboutUsHeading = ref();
    const loadingText = ref();
    const loadingPercentage = ref();

    const showLoading = ref(true);
    const onResolve = () => {
        finished = true;
    };

    let current_step = 0;
    let progress = 0;
    let finished = false;
    let step = 0.5;
    const finishing_step = 5;

    const progressBarAnimation = () => {
        current_step += step;
        if (finished) {
            const difference = 100 - progress;
            const step_size = difference / finishing_step;
            progress = progress + step_size;
            if (progress >= 100 || Math.abs(difference) < 0.1) {
                progress = 100;
            }
        } else {
            progress = (Math.atan(current_step) / (Math.PI / 2)) * 100;
        }
        loadingPercentage.value.innerText = `${progress.toFixed(0)}%`;

        loadingText.value.style.backgroundSize = `${progress}% 100%`;

        if (progress >= 70) {
            step = 0.2;
        }
        if (progress < 100) {
            window.requestAnimationFrame(progressBarAnimation);
        } else {
            const tl = gsap.timeline();
            tl.to(
                "#loading",
                {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        showLoading.value = false;
                    },
                },
                0.5
            );
        }
    };

    const splitText = (el) => {
        const text = el.innerText;
        const splitText = text.split(" ");
        el.innerText = "";
        splitText.forEach((word, index) => {
            const span = document.createElement("span");
            span.innerText = index >= splitText.length - 1 ? word : `${word} `;
            span.classList.add("word");
            el.appendChild(span);
        });
    };

    const setupMaskFill = () => {
        gsap.utils.toArray(".mask-fill>span").forEach((el) => {
            ScrollTrigger.create({
                trigger: el,
                start: "top 80%",
                end: "bottom top",
                onEnter: () => {
                    gsap.fromTo(
                        el,
                        {
                            backgroundSize: "0% 100%",
                        },
                        {
                            backgroundSize: "100% 100%",
                            ease: "power1.out",
                        }
                    );
                },
                onLeaveBack: () => {
                    gsap.fromTo(
                        el,
                        {
                            backgroundSize: "100% 100%",
                        },
                        {
                            backgroundSize: "0% 100%",
                            ease: "power1.out",
                        }
                    );
                },
            });
        });
        // ScrollTrigger.batch(
        //     ".mask-fill>span",
        //     {
        //         start: "top 80%",
        //         end: "bottom top",
        //         onEnter: (batch) => {
        //             gsap.fromTo(
        //                 batch,
        //                 {
        //                     backgroundSize:
        //                         "0% 100%",
        //                 },
        //                 {
        //                     backgroundSize:
        //                         "100% 100%",
        //                     ease: "power1.out",
        //                 }
        //             );
        //         },
        //         onLeaveBack: (
        //             batch
        //         ) => {
        //             gsap.fromTo(
        //                 batch,
        //                 {
        //                     backgroundSize:
        //                         "100% 100%",
        //                 },
        //                 {
        //                     backgroundSize:
        //                         "0% 100%",
        //                     ease: "power1.out",
        //                 }
        //             );
        //         },
        //     }
        // );
    };

    const setupWordFill = () => {
        document.querySelectorAll(".word-fill").forEach((el) => {
            splitText(el);
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "top 60%",
                    scrub: 1,
                },
            });

            tl.fromTo(
                el.querySelectorAll(".word"),
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    ease: "power1.out",
                    stagger: 0.05,
                    overwrite: true,
                }
            );
        });
    };

    let navbar;
    onMounted(() => {
        gsap.registerPlugin(ScrollTrigger);

        setupMaskFill();
        setupWordFill();

        navbar = document.querySelector(".navbar-bg");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: page.value,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: true,
            },
        });

        const isMobile = useMediaQuery("(max-width: 768px)");

        tl.fromTo(
            slideUpPanel.value,
            { y: "100%", scale: 0.7 },
            {
                y: "0%",
                scale: 1,
                ease: "power2.inOut",
            },
            0
        );

        if (!isMobile.value) {
            tl.fromTo(
                navbar,
                { opacity: 0 },
                {
                    opacity: 1,
                    ease: "power1.inOut",
                    duration: 0.4,
                },
                0.05
            );
        }

        tl.fromTo(
            hero.value,
            {
                filter: "blur(0px) brightness(100%)",
            },
            {
                filter: "blur(10px) brightness(50%)",
                ease: "power2.out",
            },
            0.1
        );

        tl.fromTo(
            "#about-us-btn",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                ease: "power2.out",
                duration: 0.2,
            },
            0.7
        );
        tl.fromTo(
            "#about-us-img",
            {
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            },
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                ease: "power2.out",
                duration: 0.2,
            },
            0.4
        );

        // tl.fromTo(
        //     aboutUsHeading.value,
        //     {
        //         backgroundImage:
        //             "linear-gradient(to right, var(--bs-body-color) 0%, var(--bs-body-color) 0%, #696969 0%)",
        //     },
        //     {
        //         backgroundImage:
        //             "linear-gradient(to right, var(--bs-body-color) 0%, var(--bs-body-color) 100%, #696969 100%)",
        //         ease: "none",
        //         duration: 0.5,
        //     },
        //     0.1
        // );
        tl.fromTo(
            aboutUsHeading.value,
            { y: "-100%" },
            {
                y: "0%",
                ease: "power2.out",
                duration: 0.2,
            },
            0.35
        );

        if (isMobile.value) {
            let cards = gsap.utils.toArray(".cards-container .card");
            gsap.to(cards, {
                x: `-${20 * (cards.length - 1)}rem`,
                ease: "none",
                scrollTrigger: {
                    trigger: "#services",
                    scrub: 1,
                    snap: {
                        snapTo: 1 / (cards.length - 1) - 0.005,
                        delay: 0.5,
                        duration: 0.5,
                    },
                    pin: true,
                    start: "top top",
                    end: () => "+=" + document.querySelector(".cards-container").offsetWidth,
                },
            });
        }

        gsap.fromTo(
            "#deals",
            {
                clipPath: "inset(6% 18% 0)",
            },
            {
                clipPath: "inset(0% 0% 0)",
                ease: "power2.out",

                scrollTrigger: {
                    trigger: "#deals",
                    start: "top bottom",
                    end: "top 40%",
                    scrub: 1,
                },
            }
        );

        ScrollTrigger.sort();
        window.requestAnimationFrame(progressBarAnimation);
    });
    onUnmounted(() => {
        gsap.killTweensOf(navbar);
        gsap.to(navbar, {
            opacity: 1,
            duration: 0.2,
        });
    });
</script>

<template>
    <div id="loading" v-if="showLoading">
        <h1 class="fw-bold" ref="loadingText" style="white-space: nowrap">
            LOADING
            <span class="fw-light" ref="loadingPercentage"></span>
        </h1>
    </div>

    <div ref="page" class="page-container">
        <div ref="hero" class="panel">
            <div class="container-xxl px-4 py-5">
                <div class="hero-container">
                    <div class="d-flex">
                        <div
                            class="hero-card px-4 px-md-5 py-5 card mx-5 flex-grow-1 flex-md-grow-0">
                            <h1 class="display-5 fw-bold mb-3 brand-name">Auto King</h1>
                            <p class="lead mb-5">Driven by Passion, Powered by Expertise</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                <router-link
                                    :to="{
                                        name: 'Book',
                                    }"
                                    class="btn btn-primary btn-lg px-4 me-md-2">
                                    Book Now
                                </router-link>

                                <router-link
                                    :to="{
                                        name: 'Services',
                                    }"
                                    class="btn btn-outline-secondary btn-lg px-4"
                                    >Learn More</router-link
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Suspense @resolve="onResolve">
                <VehicleShow />
            </Suspense>
        </div>
        <section id="about" ref="slideUpPanel" class="panel bg-body">
            <div class="container-xl h-100 px-4 py-2 py-md-4 text-center">
                <h6 class="fw-bold mb-2 section-heading mask-fill" ref="aboutUsHeading">
                    <span>[ About Us ]</span>
                </h6>
                <div
                    class="row flex-lg-row py-md-5 mx-auto g-2 g-md-5 justify-content-center justify-content-md-start">
                    <div id="about-us-img-container" class="col col-12 col-sm-10 col-md-6">
                        <img
                            src="../assets/stock/conversation.jpeg"
                            class="d-block mx-lg-auto img-fluid"
                            id="about-us-img"
                            alt="about us"
                            loading="lazy" />
                    </div>
                    <div class="col col-md-6 justify-content-start">
                        <div class="container">
                            <h2 class="text-start fw-bold mb-3 mask-fill">
                                <span> Unmatched Expertise,<br />Unwavering Commitment </span>
                            </h2>
                            <p class="text-start text-body-secondary fs-6 fw-light word-fill">
                                AutoKing, located at 223 Bolsover St. in Cairville, offers expert
                                car repairs with over 18 years of experience. We provide
                                high-quality service and a convenient courtesy drop-off for all your
                                automotive needs.
                            </p>
                            <div class="d-grid d-md-flex justify-content-md-start">
                                <router-link
                                    :to="{
                                        name: 'About',
                                    }"
                                    id="about-us-btn"
                                    class="btn btn-outline-secondary btn-lg px-4"
                                    >Learn More</router-link
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <section id="services" class="page-container">
        <div class="panel">
            <div class="container-xl h-100 px-4 py-2">
                <h6 class="text-center fw-bold mb-3 mb-md-5 section-heading mask-fill">
                    <span>[ Our Services ]</span>
                </h6>
                <h2 class="text-start fw-bold mb-3 mb-md-5 mask-fill">
                    <span> Explore Our Services </span>
                </h2>
                <div class="cards-container mb-3 mb-md-5">
                    <div class="card">
                        <img
                            src="../assets/stock/maintainance.jpeg"
                            class="card-img-top"
                            alt="maintainance" />
                        <div class="card-body">
                            <h5 class="card-title">Car Maintainance</h5>
                            <p class="card-text">
                                Our comprehensive services include oil changes, filter replacements,
                                tire rotations, and brake inspections, ensuring your vehicle's top
                                performance.
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/stock/mechanical-repair.jpeg"
                            class="card-img-top"
                            alt="repairs" />
                        <div class="card-body">
                            <h5 class="card-title">Mechanical Repairs</h5>
                            <p class="card-text">
                                Trust us for quick, safe mechanical repairs, ranging from minor
                                leaks to major engine component replacements, with expert
                                diagnostics.
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/stock/servicing.jpeg"
                            class="card-img-top"
                            alt="servicing" />
                        <div class="card-body">
                            <h5 class="card-title">Car Servicing</h5>
                            <p class="card-text">
                                We provide thorough car check-ups, covering all components, fluids,
                                and systems, ensuring your vehicle's smooth, safe operation for
                                confident driving.
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img
                            src="../assets/stock/inspection.jpeg"
                            class="card-img-top"
                            alt="inspection" />
                        <div class="card-body">
                            <h5 class="card-title">Security Inspection</h5>
                            <p class="card-text">
                                Our AIS conducts roadworthy inspections for light vehicles and hire
                                cars, checking brakes, steering, suspension, tires, and lights for
                                Australian legal compliance.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="d-grid d-md-flex justify-content-md-start mt-md-1 ms-md-1">
                    <router-link
                        :to="{
                            name: 'Services',
                        }"
                        class="btn btn-primary btn-lg px-4 me-md-2"
                        >Show All Services</router-link
                    >
                </div>
            </div>
        </div>
    </section>
    <section id="deals" style="background-color: #1e5aea" class="page-container">
        <div class="panel">
            <div class="container-xl h-100 px-4 py-2">
                <h6 class="text-center fw-bold mb-3 mb-md-5 section-heading text mask-fill">
                    <span>[ Special Deals ]</span>
                </h6>
                <h1 class="text-center fw-bold mb-5 mask-fill">
                    <span>Deals like you never seen before</span>
                </h1>
                <div class="d-grid gap-5 d-md-flex justify-content-center">
                    <div class="card deal shadow py-3 px-4" data-bs-theme="light">
                        <div class="card-body">
                            <h5 class="card-title text-center fw-bold display-1 mb-3">-10%</h5>
                            <h6
                                class="card-subtitle text-center mb-2 fs-4 fw-semibold text-body mb-3">
                                April Special
                            </h6>
                            <p class="card-text text-center text-body-secondary mb-4">
                                10% off for all online booking
                            </p>
                            <div class="d-grid">
                                <router-link
                                    :to="{
                                        name: 'Book',
                                    }"
                                    class="btn btn-primary btn-lg px-4 me-md-2">
                                    Book Now
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="card deal shadow py-3 px-4" data-bs-theme="light">
                        <div class="card-body">
                            <h5 class="card-title text-center fw-bold display-1 mb-3">$159</h5>
                            <h6
                                class="card-subtitle text-center mb-2 fs-4 fw-semibold text-body mb-3">
                                Special Offer Extended
                            </h6>
                            <p class="card-text text-center text-body-secondary mb-4">
                                Vehicle Servicing Package for only $159
                            </p>
                            <div class="d-grid">
                                <router-link
                                    :to="{
                                        name: 'Book',
                                    }"
                                    class="btn btn-primary btn-lg px-4 me-md-2"
                                    >Get the deal</router-link
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @import "../scss/styles.scss";
    @include media-breakpoint-down(md) {
        .hero-container {
            display: flex;
            flex-direction: column-reverse;
            height: 80svh;
        }
    }

    .hero-card {
        background-color: rgba(33, 37, 41, 0.8);
        backdrop-filter: blur(6px);
    }

    @include media-breakpoint-down(md) {
        .card {
            width: 18rem;
        }
    }

    @include media-breakpoint-down(md) {
        #about-us-img-container {
            max-height: 20rem;
            display: flex;
            justify-content: center;
            #about-us-img {
                max-height: 100%;
                max-width: 100%;
            }
        }
    }

    @include media-breakpoint-down(md) {
        #deals {
            height: 125vh;
        }
    }

    .cards-container {
        display: grid;
        overflow: hidden;
        grid-template-columns: repeat(4, 1fr);

        gap: 2rem;
    }

    @include media-breakpoint-up(md) {
        .cards-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @include media-breakpoint-up(lg) {
        .cards-container {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    #services {
        height: 100vh;
    }

    @include media-breakpoint-up(md) {
        #services {
            height: 200vh;
        }
    }

    @include media-breakpoint-up(lg) {
        #services {
            height: 125vh;
        }
    }

    .panel {
        position: absolute;
    }

    .card.deal {
        border-width: 0;
        border-radius: 1rem;
        width: 24rem;
    }

    .page-container {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }

    .brand-name {
        padding-bottom: 7px;
        background-image: linear-gradient(90deg, #01edff, #009ff8);
        -webkit-text-fill-color: transparent;
        background-clip: text;

        background-size: 100%;
    }

    .section-heading {
        line-height: 1.5;
    }

    .mask-fill {
        span {
            -webkit-text-fill-color: rgba(255, 255, 255, 0.1);
            background-clip: text;
            background-size: 0% 100%;
            background-image: linear-gradient(var(--bs-body-color), var(--bs-body-color));
            background-repeat: no-repeat;
        }
    }
    .word-fill > .word {
        opacity: 0;
    }

    #loading {
        background-color: var(--bs-body-bg);
        z-index: 500;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        h1 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            -webkit-text-fill-color: rgba(255, 255, 255, 0.1);
            line-height: 1.5;
            background-clip: text;
            background-size: 0% 100%;
            background-image: linear-gradient(var(--bs-body-color), var(--bs-body-color));
            background-repeat: no-repeat;
            //-webkit-text-fill-color: transparent;
            //background-clip: text;
            //background-size: 100%;
        }
    }
</style>
