export function hover() {
    $('.card-game').on('mouseenter mouseleave', function (ev) {
        let $element = this.childNodes[3];
        if (ev.type === "mouseenter") { $($element).css('opacity', '0'); }
        else if (ev.type === "mouseleave") { $($element).css('opacity', '1'); }
      })
}