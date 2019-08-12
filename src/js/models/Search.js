import axios from 'axios';
import pizza from './data/pizza'

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        // const proxy = 'https://cors-anywhere.herokuapp.com/';
        // const key = '211724fad2e600a205e14385aca63978';
        try {
            // const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            // this.result = res.data.recipes;
            this.result = pizza.recipes;
        } catch (error) {
            alert(error);
        }
    };
}
