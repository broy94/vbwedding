import Select from "react-select";

const options = [
    {
        value: "en",
        label: <span><span className="fi fi-gb"></span></span>
    },
    {
        value: "hu",
        label: <span><span className="fi fi-hu"></span></span>
    }
];

const customStyles = {
    menuList: base => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0
    }),
    menu: base => ({
        ...base,
        marginTop: 0,
        marginBottom: 0
    }),
    control: base => ({
        ...base,
        cursor: 'pointer',
        backgroundColor: 'var(--p4-color)',
        minHeight: 30,
        height: 30,
        border: 'none',
        boxShadow: 'none',
        borderRadius: '2px'
    }),
    option: (base, state) => {
        return {
            ...base,
            cursor: 'pointer',
            backgroundColor: state.isSelected ? 'var(--p4-color)' : 'var(--p4-color)',
            padding: 0,
            borderRadius: '2px',
            border: '1px solid var(--p2-color)'
        };
    }
};

function LanguageSelector(props) {
    const getCurrentLanguageValue = () => {
        return options.find(opt => opt.value === props.currentLanguage);
    }

    return <Select options={options}
                   className={props.className}
                   controlShouldRenderValue={true}
                   hideSelectedOptions={true}
                   isClearable={false}
                   isSearchable={false}
                   defaultValue={getCurrentLanguageValue()}
                   value={getCurrentLanguageValue()}
                   onChange={props.onLanguageChange}
                   styles={customStyles}
                   components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
    />;
}

export default LanguageSelector;