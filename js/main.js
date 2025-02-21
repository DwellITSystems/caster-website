$(document).ready(function () {
    $.getJSON('./json/data.json', function (data) {
        var aboutHTML = '';
        var serviceHTML = '';
        var clientsHTML = '';
        $.each(data, function (key, value) {
            if (key == 'about') {
                $.each(value, function (a, v) {
                    aboutHTML += '<div data-aos="fade-zoom-in" data-aos-delay="400" data-aos-duration="1000" class="w-full mb-4 max-md:text-center">'
                    aboutHTML += '<h2 class="text-primary-foreground max-md:text-lg text-3xl font-semibold">'
                    aboutHTML += v.title
                    aboutHTML += '</h2>'
                    aboutHTML += '<p class="font-medium max-md:text-sm text-md mt-3 leading-relaxed text-primary-foreground">' + v.content + '</p>'
                    if (v.subItems.length > 0) {
                        $.each(v.subItems, function (as, vs) {
                            aboutHTML += '<h3 class="mt-4 text-primary font-semibold">Reliability</h3>'
                            aboutHTML += '<p class="font-medium text-md text-primary-foreground flex items-start gap-2 mt-3">'
                            aboutHTML += '<svg xmlns= "http://www.w3.org/2000/svg" viewBox = "0 0 24 24" fill = "currentColor" class="size-5 text-primary mt-1">'
                            aboutHTML += '<path fillRule = "evenodd" d = "M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule = "evenodd" />'
                            aboutHTML += '<path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" /></svg >'
                            aboutHTML += vs.content
                            aboutHTML += '</p>'
                        });
                    }
                    aboutHTML += '</div>'
                });
                $("#about-view").append(aboutHTML);
            }
            else if (key == 'service') {
                $.each(value, function (s, v) {
                    serviceHTML += '<div class="w-full service-view aos-init aos-animate" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">'
                    serviceHTML += '<h2 class="max-md:text-2xl text-4xl font-semibold text-gray-900 text-center">' + v.title + '</h2>'
                    serviceHTML += '<p class="text-center max-md:text-sm text-md mt-3 leading-relaxed">' + v.content + '</p>'
                    serviceHTML += '</div>'
                    serviceHTML += '<div class="grid grid-cols-2 max-md:grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 max-md:mt-6 mt-16 aos-init aos-animate">'
                    $.each(v.items, function (as, vs) {
                        serviceHTML += '<div id="' + vs.id + '" data-aos="fade-up" data-aos-delay="' + as * 400 + '" data-aos-duration="1000"  class="service-view cursor-pointer group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">'
                        serviceHTML += '<img src="' + vs.image + '" loading = "lazy" alt = "" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110">'
                        serviceHTML += '<div class="relative w-full bg-gray-900/80 flex flex-col items-center justify-center py-3 px-3 z-50 transition-opacity duration-300 ease-in-out group-hover:opacity-0">'
                        serviceHTML += '<h2 class="text-center text-primary-foreground font-bold max-md:text-sm text-md">' + vs.title + '</h2>'
                        serviceHTML += '</div>'

                        serviceHTML += '<div class="flex px-4 flex-col items-center justify-center bg-black/80 text-primary-foreground w-full h-full absolute top-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">'
                        serviceHTML += '<p class="text-center relative inline-block max-md:text-xs text-sm text-primary-foreground font-semibold mt-2">' + vs.content + '</p>'
                        serviceHTML += '<span class="border rounded-full mt-5 p-2 transition-all duration-300 ease-in-out">'
                        serviceHTML += '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 transition-transform duration-500 ease-in-out group-hover:rotate-180 group-hover:stroke-primary-foreground"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path></svg>'
                        serviceHTML += '</span>'
                        serviceHTML += '</div>'
                        serviceHTML += '</div>'
                    });

                    serviceHTML += '</div>'
                });
                $("#services").append(serviceHTML);
            }
            else if (key == 'clients') {
                $.each(value, function (c, cv) {
                    $("#clients-header").html(cv.title);
                    $("#clients-content").html(cv.content);
                });
                $("#client-carousel").append(clientsHTML);
            }

        });
    });

    showQutoe();

    function showQutoe() {
        setTimeout(() => {
            $("#getin-qutoe-modal-open").trigger('click');
            localStorage.setItem("popupClosedTime", new Date().getTime());
        }, 20000);
    }

    function checkPopupVisibility() {
        let lastClosed = localStorage.getItem("popupClosedTime");
        let now = new Date().getTime();
        let twentyMinutes = 20 * 60 * 1000;
        console.log(twentyMinutes);
        if (!lastClosed || (now - lastClosed) >= twentyMinutes) {
            setTimeout(showQutoe, 20000);
        }
    }

    checkPopupVisibility();
});