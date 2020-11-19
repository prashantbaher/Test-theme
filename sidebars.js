module.exports = {
  someSidebar: {
    Docusaurus: ['doc1', 'doc2', 'doc3'],
    Features: ['mdx'],
  },
  vba: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['vba-Intro', 
        'vba/vba-vbe',
        'vba/vba-vbe-window',
      ]
    },
    {
      type: 'category',
      label: 'Procedures',
      items: [
        'vba/vba-procedures',
        'vba/vba-procedures-exec',
      ]
    },
    {
      type: 'category',
      label: 'Programming Concept',
      items: [
        'vba/vba-prog-concept',
        'vba/vba-variables',
        'vba/vba-variables-decl',
        'vba/vba-variable-scope',
        'vba/vba-variable-life',
        'vba/vba-constants',
        'vba/vba-string-basic',
        'vba/vba-statement',
        'vba/vba-arrays',
        'vba/vba-functions',
        'vba/vba-functions-adv',
      ],
    },
    {
      type: 'category',
      label: 'Program Flow',
      items: [
        'vba/vba-program-flow',
        'vba/vba-if-else',
        'vba/vba-looping',
      ]
    },
    {
      type: 'category',
      label: 'Bug Finding',
      items: [
        'vba/vba-bug-find',
        'vba/vba-debugger',
        'vba/vba-bug-tips',
      ]
    },
    {
      type: 'category',
      label: 'Dialog Boxes',
      items: [
        'vba/vba-dialog-box',
        'vba/vba-msgbx-box',
        'vba/vba-input-box',
        'vba/vba-open-boxes',
      ]
    },
   ],
  vbaForms: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'vba-userforms',
        'vba-userform/vba-userforms-open-part',
        'vba-userform/vba-userforms-open--ass-doc',
        'vba-userform/vba-userforms-open-part-test',
        'vba-userform/vba-userforms-browse-files',
      ]
    },
  ],
  swvba: [
    {
      type: 'category',
      label: 'General Functions',
      items: [
        'vba-in-sw',
        'solidworks-macros/sw-macro-open-part',
        'solidworks-macros/sw-macro-open-asm-and-dwg',
        'solidworks-macros/sw-macro-selection-methods',
        'solidworks-macros/sw-macro-open-saved-documents',
        'solidworks-macros/sw-sketch-macro-fix-unit-issue',
      ],
    },
    {
      type: 'category',
      label: 'Sketch',
      items: [
        {
          type: 'category',
          label: 'Lines',
          items: [
            'solidworks-macros/sw-sketch-macro-create-line',
            'solidworks-macros/sw-sketch-macro-create-centerline',
          ]
        },
        {
          type: 'category',
          label: 'Rectangles',
          items: [
            'solidworks-macros/sw-sketch-macro-create-corner-rec',
            'solidworks-macros/sw-sketch-macro-create-center-rec',
            'solidworks-macros/sw-sketch-macro-create-3point-corner-rec',
            'solidworks-macros/sw-sketch-macro-create-3point-center-rec',
            'solidworks-macros/sw-sketch-macro-create-parallelogram',
          ]
        },
        {
          type: 'category',
          label: 'Circles',
          items: [
            'solidworks-macros/sw-sketch-macro-create-circle',
            'solidworks-macros/sw-sketch-macro-create-circle-by-radius',
            'solidworks-macros/sw-sketch-macro-create-perimeter-circle',
          ]
        },
        {
          type: 'category',
          label: 'Arcs',
          items: [
            'solidworks-macros/sw-sketch-macro-create-centerpoint-arc',
            'solidworks-macros/sw-sketch-macro-create-tangent-arc',
            'solidworks-macros/sw-sketch-macro-create-3point-arc',
            'solidworks-macros/sw-sketch-macro-create-polygon',
          ]
        },
        {
          type: 'category',
          label: 'Slots',
          items: [
            'solidworks-macros/sw-sketch-macro-create-straight-slot',
            'solidworks-macros/sw-sketch-macro-create-centerpoint-straight-slot',
            'solidworks-macros/sw-sketch-macro-create-3point-arc-slot',
            'solidworks-macros/sw-sketch-macro-create-centerpoint-arc-slot',
          ]
        },
        {
          type: 'category',
          label: 'Splines',
          items: [
            'solidworks-macros/sw-sketch-macro-create-point',
            'solidworks-macros/sw-sketch-macro-create-spline',
          ]
        },
        {
          type: 'category',
          label: 'Fillet & Chamfer',
          items: [
            'solidworks-macros/sw-sketch-macro-create-fillet',
            'solidworks-macros/sw-sketch-macro-create-chamfer',
          ]
        },
        {
          type: 'category',
          label: 'Trim and Extend',
          items: [
            'solidworks-macros/sw-sketch-macro-trim-entities',
            'solidworks-macros/sw-sketch-macro-extend-entities',
          ]
        },
        {
          type: 'category',
          label: 'Offset and Mirror',
          items: [
            'solidworks-macros/sw-sketch-macro-offset-entities',
            'solidworks-macros/sw-sketch-macro-mirror-sketch-entities',
          ]
        },
        {
          type: 'category',
          label: 'Sketch Patterns',
          items: [
            'solidworks-macros/sw-sketch-macro-linear-sketch-patterm',
            'solidworks-macros/sw-sketch-macro-edit-linear-sketch-patterm',
            'solidworks-macros/sw-sketch-macro-circular-sketch-patterm',
            'solidworks-macros/sw-sketch-macro-edit-circular-sketch-pattern',
          ]
        },
        {
          type: 'category',
          label: 'Sketch Transformation',
          items: [
            'solidworks-macros/sw-sketch-macro-move-or-copy-sketch-entities',
            'solidworks-macros/sw-sketch-macro-rotate-or-copy-sketch-entities',
          ]
        },
        {
          type: 'category',
          label: 'Sketch Relations',
          items: [
            'solidworks-macros/sw-sketch-macro-toggle-sketch-relation',
            'solidworks-macros/sw-sketch-macro-add-sketch-relation',
          ]
        },
        {
          type: 'category',
          label: 'Others',
          items: [
            'solidworks-macros/sw-sketch-macro-convert-to-construction-sketch',
            'solidworks-macros/sw-sketch-macro-split-sketch-entities',
          ]
        },
        {
          type: 'category',
          label: 'Sketch Dimensioning',
          items: [
            'solidworks-macros/sw-sketch-macro-add-dimension-sketch-entities',
          ]
        },
      ]
    },
  ],
  swcpp: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'sw-cpp', 
        'solidworks-Cpp-tutorials/sw-cpp-pre', 
        'solidworks-Cpp-tutorials/sw-cpp-open',
        'solidworks-Cpp-tutorials/sw-cpp-part-doc'
      ]
    },
  ],
};
