new Vue({
    el: '#app',
    data: {
        doctor: {
            firstName: "Jorge",
            middleName: "L.",
            lastName: "Weaver",
            type: "Physician",
            id: "03578115",
        },
        patients: patients,
    },
    methods: {
        sortDate(dataSet, valueToSort, descending = true) {
            return dataSet.sort((a, b) => {
                if (descending) {
                    return moment(b[valueToSort],'DD-MMMM-YYYY').unix() - moment(a[valueToSort],'DD-MMMM-YYYY').unix();
                } else {
                    return moment(a[valueToSort],'DD-MMMM-YYYY').unix() - moment(b[valueToSort],'DD-MMMM-YYYY').unix();
                }
            });
        },
        getRecentTests(patient, amount) {
            return this.sortDate(patient.OrderEntry, 'ServiceDate').slice(0, amount);
        },
    }
})