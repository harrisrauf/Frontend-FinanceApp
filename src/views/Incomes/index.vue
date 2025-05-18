<template>
    <h1>Incomes</h1>
    <table>
        <thead>
            <tr>
            <th>Source</th>
            <th>Amount</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="income in incomes">
                <td>
                    <a :href="`/incomes/${income.id}`">
                    {{ income.description }}
                    </a>
                </td>
                <td>{{ income.amount }}</td>
                <td>{{ income.date.split('T')[0] }}</td>
            </tr>
        </tbody>
    </table>
    <button type="button" v-on:click='GoBack' >Return</button>
</template>

<script>
export default {
    data() {
        return {
            incomes:[]

        }
    }, async mounted() {
        try {
            this.incomes = await fetch('http://localhost:3000/income').then(res => res.json());
        } catch {
            alert("Error Ocurred")
        }
    },
    methods:{
        GoBack(){
            window.location.href='/'
        }
    }
}
</script>