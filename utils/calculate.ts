import { values } from "./types/values";

    export async function calculateResult(values: values){
        
        values.fullIncrease = parseFloat(Number((values.amount / 100) * values.interest).toFixed(2));

        switch(values.duration) { 
            case "daily": { 
                values.expectedIncrease = parseFloat(Number(values.fullIncrease/365).toFixed(2));
                values.expectedFinalValue = parseFloat(Number(values.amount + (values.fullIncrease/365)).toFixed(2));
                return values;
            };
            case "monthly": {
                values.expectedIncrease = parseFloat(Number(values.fullIncrease/10).toFixed(2));
                values.expectedFinalValue = parseFloat(Number(values.amount + (values.fullIncrease/10)).toFixed(2));                
                return values;
            };
            case "yearly": {
                values.expectedIncrease = values.fullIncrease
                values.expectedFinalValue = parseFloat(Number(values.amount + (values.fullIncrease)).toFixed(2));  
                return values;
            };
        }
    }
