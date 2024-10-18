<script setup>
    import { ref } from "vue";
    import maintainanceImg from "../assets/stock/maintainance.jpeg";
    import mechanicalRepairImg from "../assets/stock/mechanical-repair.jpeg";
    import servicingImg from "../assets/stock/servicing.jpeg";
    import inspectionImg from "../assets/stock/inspection.jpeg";

    import carImg from "../assets/cars/car.jpg";
    import truckImg from "../assets/cars/truck.jpg";
    import fourWheelDriveImg from "../assets/cars/4WD.jpg";
    import suvImg from "../assets/cars/SUV.jpg";

    const serviceTypeOptions = [
        {
            label: "Car Maintainance",
            value: "maintainance",
            img: maintainanceImg,
            text: "Our comprehensive services include oil changes, filter replacements, tire rotations, and brake inspections, ensuring your vehicle's top performance.",
        },
        {
            label: "Mechanical Repairs",
            value: "repair",
            img: mechanicalRepairImg,
            text: "Trust us for quick, safe mechanical repairs, ranging from minor leaks to major engine component replacements, with expert diagnostics.",
        },
        {
            label: "Car Servicing",
            value: "servicing",
            img: servicingImg,
            text: "We provide thorough car check-ups, covering all components, fluids, and systems, ensuring your vehicle's smooth, safe operation for confident driving.",
        },
        {
            label: "Security Inspection",
            value: "inspection",
            img: inspectionImg,
            text: "Our AIS conducts roadworthy inspections for light vehicles and hire cars, checking brakes, steering, suspension, tires, and lights for Australian legal compliance.",
        },
    ];

    const vehicleTypeOptions = [
        {
            label: "General Car",
            value: "car",
            img: carImg,
        },
        {
            label: "Truck",
            value: "truck",
            img: truckImg,
        },
        {
            label: "4WD",
            value: "4WD",
            img: fourWheelDriveImg,
        },
        {
            label: "SUV",
            value: "SUV",
            img: suvImg,
        },
    ];
    const selectedServiceOption = ref("");
    const selectedVehicleOption = ref("");
</script>
<template>
    <div class="container-xl py-3 px-4">
        <div class="panel">
            <h1 class="fw-bold display-3 mb-3 mb-md-5">Our Services</h1>
            <h3 class="fw-semibold display-6 mb-3">By Service Type</h3>

            <div
                class="cards-container mb-3 mb-md-5 justify-content-center justify-content-md-start">
                <RadioCards
                    :options="serviceTypeOptions"
                    v-model="selectedServiceOption"></RadioCards>
            </div>

            <h3 class="fw-semibold display-6 mb-3">By Vehicle Type</h3>
            <div
                class="cards-container justify-content-center justify-content-md-start mb-3 mb-md-5">
                <RadioCards
                    :options="vehicleTypeOptions"
                    v-model="selectedVehicleOption"></RadioCards>
            </div>
            <div class="d-grid mb-5 d-md-flex justify-content-md-start">
                <router-link
                    :to="{
                        name: 'Book',
                        query: {
                            serviceType: selectedServiceOption,
                            vehicleType: selectedVehicleOption,
                        },
                    }"
                    class="btn btn-primary btn-lg">
                    Book Now
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .cards-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
</style>
<style>
    .card > img {
        height: 10rem;
    }

    .card {
        width: 18rem;
    }
</style>
