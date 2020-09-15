const toSlug = value => {
    return value
        .toLowerCase()
        .trim()
        .replace(/[\s_]/g, '-') // change underscores to dashes
        .replace(/[^a-z0-9-]/g, '') // remove forbidden characters
        .replace(/-+/g, '-') // convert multiple dashes to one
        .replace(/-$/g, ''); // remove 'hanging' dashes at the end
};

export { toSlug };
