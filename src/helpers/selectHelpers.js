import makeAnimated from 'react-select/animated';

export function getSelectOptions(options) {
    const newOptions = [];
    options.map(option => {
        newOptions.push({ value: option, label: option.toLocaleString() });
    });
    return newOptions;
}

export function range({ to, from, step, length = Math.ceil((to - from + 1) / step) }) {
    return Array.from({ length }, (_, i) => from + i * step);
}

export const animatedComponents = makeAnimated();

export function styleSelect(padding = '12px 20px 12px 20px') {
    return {
        option: provided => {
            return {
                ...provided,
                border: 'none',
                borderRadius: '8px',
                textAlign: 'left',
                padding: '12px 20px',

                color: 'var(--black-color)',
                backgroundColor: 'transparent',
                transition: 'background-color .5s ease-in-out, color .5s ease-in-out',
                cursor: 'pointer',
                '&:hover, &:focus': {
                    backgroundColor: 'var(--white-color)',
                    color: 'var(--dark-blue-color)',
                },
            };
        },
        control: styles => ({
            ...styles,

            color: 'var(--dark-blue-color)',
            border: '1px solid var(--dark-blue-color)',
            borderRadius: '8px',
            padding: 0,
            minHeight: '62px',
            backgroundColor: 'var(--light-blue-color)',
            boxShadow: '8px 8px 60px var(--blue-color), -16px -16px 40px var(--white-color)',
            transition: 'background-color .5s ease-in-out, color .5s ease-in-out',
            cursor: 'pointer',
            '&:hover, &:focus': {
                backgroundColor: 'var(--white-color)',
                color: 'var(--dark-blue-color)',
            },
        }),

        singleValue: provided => {
            return {
                ...provided,
                right: 5,
                color: 'var(--black-color)',
                padding,
            };
        },

        menu: provided => {
            return {
                ...provided,
                backgroundColor: 'var(--light-blue-color)',
                color: 'var(--dark-blue-color)',
                borderRadius: '8px',
                width: '100%',
                boxShadow: '1px 1px 16px var(--blue-color), -4px -4px 16px var(--white-color)',
                marginTop: '2px',
                // opacity: state.hasValue ? 1 : 0,
                // transition: 'opacity .5s ease-in-out',
                zIndex: 2,
            };
        },
        menuList: base => ({
            ...base,
            scrollbarWidth: 'thin',
        }),

        indicatorsContainer: () => {
            return {
                paddingRight: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            };
        },
        indicatorSeparator: () => ({}),
        indicators: () => {
            return {
                cursor: 'pointer',
            };
        },

        input: provided => {
            return {
                ...provided,
                margin: '0px',
                color: 'var(--black-color)',
                padding: '12px 20px',

                minWidth: '200px',
                '&:hover, &:focus': {
                    color: 'var(--dark-blue-color)',
                },
            };
        },

        placeholder: defaultStyles => {
            return {
                ...defaultStyles,
                color: 'var(--black-color)',
                opacity: '.7',
                padding: '12px 20px',
            };
        },
    };
}
