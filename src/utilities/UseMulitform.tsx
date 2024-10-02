import { ReactElement, ReactNode, useState } from "react";


export function UseMultiForm(steps:ReactElement[]){
    const [currentStepIndex, setCurrentstepIndex]= useState(0);
    function back(){
        setCurrentstepIndex(i=>{
            if(i===0) return i
            return i-1
        })
    }
    function next(){
        setCurrentstepIndex(i=>{
            if(i>= steps.length-1) return i
            return i+1
        })

    }
    function goTo(index:number){
        setCurrentstepIndex(index)

    }

    return{
        currentStepIndex,
        back,
        next,
        goTo,
        step:steps[currentStepIndex],
        steps,
        isfirstStep:currentStepIndex === 0,
        islastStep: currentStepIndex===steps.length-1,
    }
}