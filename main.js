let focusedElement = undefined

const setObserver = (...target) =>
{
    const options = {
        root: null,
        rootMargin: '-75px',
        threshold: 0
    }
    let observe = new IntersectionObserver( (entries) =>
    {
        entries.forEach(entry =>
            {
                if (entry.isIntersecting) {
                    document,getElementById(entry.target.dateset.menupointer).classList.add("menu_item--actual")
                }
                else
                {
                    document.getElementById(entry.target.dateset.menupointer).classList.remove("menu_item--actual")
                }
            })
    } , options) 

    target.forEach(item =>
     {
        observe.observe(item)
     })
}

setObserver(...document.querySelectorAll(".observesSection"))