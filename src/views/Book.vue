<script setup>
    const route = useRoute();

    const vehicleType = ref("default");
    const serviceType = ref();

    const serviceTypeOptions = [
        { text: "Car Maintainance", value: "maintainance" },
        { text: "Mechanical Repairs", value: "repair" },
        { text: "Car Servicing", value: "servicing" },
        { text: "Security Inspection", value: "inspection" },
    ];

    const vehicleTypeOptions = [
        { text: "General Car", value: "car" },
        { text: "Truck", value: "truck" },
        { text: "4WD", value: "4WD" },
        { text: "SUV", value: "SUV" },
    ];
    onMounted(() => {
        const vehicleTypeQuery = route.query.vehicleType;
        vehicleType.value =
            vehicleTypeQuery &&
            vehicleTypeOptions.find((option) => option.value === vehicleTypeQuery)
                ? vehicleTypeQuery
                : "default";
        const serviceTypeQuery = route.query.serviceType;

        serviceType.value =
            serviceTypeQuery &&
            serviceTypeOptions.find((option) => option.value === serviceTypeQuery)
                ? serviceTypeQuery
                : "default";
    });
</script>
<template>
    <div class="container-xl py-3 px-4">
        <div class="panel">
            <h1 class="fw-bold display-4 mb-3 mb-md-5">Start Booking</h1>

            <form class="container">
                <h4 class="display-5 fw-semibold mb-3">Contact Information</h4>
                <div class="form-group required">
                    <label for="inputName">Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="inputName"
                        placeholder="Enter name"
                        required />
                </div>
                <div class="form-group required">
                    <label for="inputPhone">Phone Number</label>
                    <input
                        type="tel"
                        class="form-control"
                        id="inputPhone"
                        placeholder="Enter phone number"
                        required />
                </div>
                <div class="form-group required">
                    <label for="inputEmail">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="inputEmail"
                        placeholder="Enter email"
                        required />
                </div>
                <h4 class="display-5 fw-semibold mb-3">Booking Information</h4>
                <h5 class="display-6 mb-3">Service Information</h5>
                <div class="form-group required">
                    <label for="selectService">Service Type</label>
                    <select class="form-select" id="selectService" v-model="serviceType" required>
                        <option value="default" selected>Select a service...</option>
                        <option
                            v-for="option in serviceTypeOptions"
                            :key="option.value"
                            :value="option.value">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="inputServiceDetail">Request Detail & Additional Notes</label>
                    <textarea
                        class="form-control"
                        rows="5"
                        id="inputServiceDetail"
                        placeholder="Enter details" />
                </div>

                <label class="display-6 mb-3">Vehicle Information</label>
                <div class="form-group required">
                    <label for="selectVehicleType">Vehicle Type</label>

                    <select
                        class="form-select"
                        id="selectVehicleType"
                        v-model="vehicleType"
                        required>
                        <option value="default" selected>Select a vehicle type...</option>
                        <option
                            v-for="option in vehicleTypeOptions"
                            :key="option.value"
                            :value="option.value">
                            {{ option.text }}
                        </option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="inputVehicleType">Vehicle Model</label>
                    <input
                        type="text"
                        class="form-control"
                        id="inputVehicleModel"
                        placeholder="Enter vehicle model" />
                </div>

                <div class="form-group required mt-5">
                    <label for="inputTime">Prefered Time</label>
                    <input type="datetime-local" class="form-control" id="inputTime" required />
                </div>

                <button type="submit" class="mt-4 btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .form-group {
        margin-bottom: 1.25rem;
        max-width: 40rem;
    }
    .form-group.required label::after {
        content: "*";
        color: var(--bs-danger);
    }
</style>
