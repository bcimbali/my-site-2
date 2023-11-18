module.exports = {
  jsx: {
    babelConfig: {
      plugins: [
        [
          '@svgr/babel-plugin-add-jsx-attribute',
          {
            elements: ['path'],
            attributes: [
              {
                name: 'stroke',
                value: "props.color || '#ffffff'",
                spread: false,
                literal: true,
                position: 'end'
              },
              {
                name: 'fill',
                value: "props.fill || 'none'",
                spread: false,
                literal: true,
                position: 'end'
              }
            ]
          },
          'path-alteration'
        ]
      ]
    }
  }
};
