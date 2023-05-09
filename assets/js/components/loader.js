function loader() {
    window.addEventListener('load', function () {
        this.setTimeout(()=>{
          const loader = document.querySelector('.loader')
        loader.classList.add('loader--hidden')
        },200)
      })
}

export default loader