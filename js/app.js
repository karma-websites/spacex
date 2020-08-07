let rellax = new Rellax('#rellax');
addEventListener("resize", () => {
    if (document.body.clientWidth < 577) {
        rellax.destroy();
    }
});


AOS.init();
