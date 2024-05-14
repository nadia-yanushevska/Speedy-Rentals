export function getToastStyles() {
    return {
        toastOptions: getToastOptions(),
        gutter: 36,
    };
}

function getToastOptions() {
    return {
        style: {
            color: 'var(--blue-color)',
            backgroundColor: 'var(--white-color)',
            border: '1px solid var(--blue-color)',
        },
    };
}
