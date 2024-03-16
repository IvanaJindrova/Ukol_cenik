const selectPlan = (planNumber) => {
    const plan = document.getElementById(planNumber) //tady si vyberu element, dle ID
    plan.classList.toggle('plan--selected') // tady chci přepínat zda třída na elementu je nebo není - toto mi nefunguje a háže mi chybu v conzoli že se snažím o element s hodnotou null
    console.log(planNumber) // pro kontrolu si vypíšu zda vybírám správný element
}

selectPlan(plan3)
