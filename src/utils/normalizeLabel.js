// remove all whitespaces and convert all characters to lowercase
const normalizeLabel = label => {
    return label.toLowerCase().replace(/\s/g, '');
};

export default normalizeLabel;