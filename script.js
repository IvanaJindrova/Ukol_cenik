const selectPlan = (planNumber) => {
    const plan = document.getElementById(${planNumber})
    plan.classList.toggle('plan--selected')
    console.log(planNumber)
}

selectPlan(plan3)