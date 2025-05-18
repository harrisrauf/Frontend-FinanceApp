<template>
    <h1>Expenses</h1>
    <table>
        <thead>
            <tr>
                <th>Description</th>
                <th> Price</th>
                <th> Date</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="expense in expenses">
                <td>
                    <a :href="`/expenses/${expense.id}`">
                    {{ expense.description }}
                    </a>
                </td>
                <td>
                    {{ expense.price }}
                </td>
                <td>
                    {{ expense.date.split('T')[0] }}
                </td>
            </tr>
        </tbody>
    </table>
    <button type="button" v-on:click='GoBack' >Return</button>
</template>

<script>
export default {
    data() {
        return {
            expenses:[]

        }
    }, async mounted() {
        try {
            this.expenses = await fetch('http://localhost:3000/expense').then(res => res.json());
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