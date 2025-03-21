self.addEventListener("widgetinstall", (event) => {
    // The widget just got installed, render it using renderWidget.
    // Pass the event.widget object to the function.
    event.waitUntil(renderWidget(event.widget));
});

self.addEventListener("activate", (event) => {
    event.waitUntil(updateWidgets());
});

async function renderWidget(widget) {
    // Get the template and data URLs from the widget definition.
    const templateUrl = widget.definition.msAcTemplate;
    const dataUrl = widget.definition.data;

    // Fetch the template text and data.
    const template = await (await fetch(templateUrl)).text();
    const data = await (await fetch(dataUrl)).text();

    // Render the widget with the template and data.
    await self.widgets.updateByTag(widget.definition.tag, { template, data });
}

async function updateWidgets() {
    // Get the widget that match the tag defined in the web app manifest.
    const widget = await self.widgets.getByTag("hcm");
    if (!widget) {
        return;
    }

    // Using the widget definition, get the template and data.
    const template = await (await fetch(widget.definition.msAcTemplate)).text();
    const data = await (await fetch(widget.definition.data)).text();

    // Render the widget with the template and data.
    await self.widgets.updateByTag(widget.definition.tag, { template, data });
}

self.addEventListener('widgetclick', (event) => {
    switch (event.action) {
        case 'previous-song':
            // Application logic to play the previous song...
            break;
        case 'next-song':
            // Application logic to play the next song...
            break;
    }
});



