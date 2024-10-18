<script setup></script>
<template>
    <footer class="text-center text-lg-start bg-body-tertiary text-muted">
        <!-- Section: Social media -->
        <section
            class="d-none d-md-flex justify-content-center justify-content-lg-between"></section>
        <!-- Section: Links  -->
        <section class="d-none d-md-block">
            <div class="container text-center text-md-start mt-5">
                <!-- Grid row -->
                <div class="row mt-3">
                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <!-- Content -->
                        <h6 class="text-uppercase fw-bold mb-4">AutoKing</h6>
                        <p>
                            At our modern family-run car repair shop, located at 223 Bolsover St. in
                            Cairville, we've been providing friendly and reliable automotive
                            services for seven years.
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Services</h6>
                        <p>
                            <a href="#!" class="text-reset">Maintainance</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Repairs</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Servicing</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Inspection</a>
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                        <p>
                            <router-link
                                :to="{
                                    name: 'Services',
                                }"
                                class="text-reset"
                                >Services</router-link
                            >
                        </p>
                        <p>
                            <router-link
                                :to="{
                                    name: 'Contact',
                                }"
                                class="text-reset"
                                >Contact</router-link
                            >
                        </p>
                        <p>
                            <router-link
                                :to="{
                                    name: 'Book',
                                }"
                                class="text-reset"
                                >Book</router-link
                            >
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Blog</a>
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p style="white-space: nowrap">
                            <i class="bi bi-house me-3"></i>
                            23 Bolsover Street, Cairville, Queensland
                        </p>
                        <p style="white-space: nowrap">
                            <i class="bi bi-envelope me-3"></i>
                            autokingcarrepairs@autokingmail.com.au
                        </p>
                        <p>
                            <i class="bi bi-telephone me-3"></i>
                            07 4779 1243
                        </p>
                        <p>
                            <i class="bi bi-printer me-3"></i>
                            07 4779 1244
                        </p>
                    </div>
                    <!-- Grid column -->
                </div>
                <!-- Grid row -->
            </div>
        </section>
        <!-- Section: Links  -->

        <!-- Copyright -->
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
            © 2024 Copyright:
            <a class="text-reset fw-bold" href="#">AutoKing</a>
        </div>
        <!-- Copyright -->
    </footer>
</template>

<style scoped></style>
