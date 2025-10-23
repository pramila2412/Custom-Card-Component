import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

const GrapesJSCardBuilder = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = grapesjs.init({
        container: '#grapesjs-editor',
        height: '100vh',
        width: '100%',
        storageManager: false,
        plugins: [],
        canvas: {
          styles: [],
          scripts: [],
          droppable: true
        },
        blockManager: {
          appendTo: '#block-manager'
        },
        styleManager: {
          appendTo: '#style-manager'
        },
        traitManager: {
          appendTo: '#trait-manager'
        },
        layerManager: {
          appendTo: '#layer-manager'
        },
        panels: {
          defaults: []
        },
        components: '',
        fromElement: false,
        showOffsets: true,
        noticeOnUnload: false,
        dragMode: 'translate',
        forceClass: false,
        avoidInlineStyle: false,
        domComponents: {
          wrapper: {
            droppable: true
          }
        }
      });

      editor.on('load', () => {
        
        editor.addStyle(`
          .custom-card {
            max-width: 600px !important;
            width: 100% !important;
            border: 1px solid #e2e8f0 !important;
            border-radius: 8px !important;
            overflow: hidden !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
            background-color: #ffffff !important;
            transition: transform 0.2s ease-in-out !important;
            margin: 20px auto !important;
            display: block !important;
          }
          .custom-card:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15) !important;
          }
          .custom-card__image {
            width: 100% !important;
            height: 200px !important;
            object-fit: cover !important;
            display: block !important;
          }
          .custom-card__content {
            padding: 24px !important;
          }
          .custom-card__title {
            font-size: 1.75rem !important;
            font-weight: 700 !important;
            color: #2d3748 !important;
            margin-bottom: 12px !important;
            line-height: 1.3 !important;
          }
          .custom-card__description {
            font-size: 1rem !important;
            color: #4a5568 !important;
            line-height: 1.6 !important;
            margin-bottom: 20px !important;
          }
          .custom-card__button {
    display: inline-block !important;
    background: #667eea !important;
    color: white !important;
    padding: 12px 24px !important;
    text-decoration: none !important;
    border-radius: 6px !important;
    font-weight: 600 !important;
    font-size: 1rem !important;
    transition: background-color 0.2s ease-in-out !important;
    pointer-events: auto !important;
    cursor: pointer !important;
    z-index: 1000 !important;
    position: relative !important;
}

           .custom-card__button:hover {
             background: #5a67d8 !important;
           }
           /* Ensure card is always selectable */
           .custom-card {
             cursor: pointer !important;
           }
         

           .custom-card {
             pointer-events: auto !important;
           }
         `);
        editor.DomComponents.addType('custom-card', {
          model: {
             defaults: {
               name: 'Custom Card',
               droppable: true,
               removable: true,
               highlightable: true,
               copyable: true,
               badgable: true,
               resizable: true,
               editable: true,
               stylable: true,
               classes: ['custom-card'],
               imageUrl: 'https://wallpapercave.com/wp/wp2298556.jpg',
               title: 'Your title here',
               description: 'Your description goes here...',
               buttonLabel: 'Click Me!',
               buttonLink: 'https://www.google.com',
               style: {
                 width: '400px',
                 maxWidth: '100%'
               },
               traits: [
                 {
                   type: 'text',
                   label: 'Image URL',
                   name: 'imageUrl',
                   changeProp: false,
                   placeholder: 'https://picsum.photos/300/150'
                 },
                 {
                   type: 'text',
                   label: 'Title',
                   name: 'title',
                   changeProp: false,
                   placeholder: 'Card Title'
                 },
                 {
                   type: 'textarea',
                   label: 'Description',
                   name: 'description',
                   changeProp: false,
                   placeholder: 'Card description goes here...'
                 },
                 {
                   type: 'text',
                   label: 'Button Label',
                   name: 'buttonLabel',
                   changeProp: false,
                   placeholder: 'Click Me'
                 },
                 {
                   type: 'text',
                   label: 'Button Link',
                   name: 'buttonLink',
                   changeProp: false,
                   placeholder: 'https://www.google.com'
                 },
                 {
                   type: 'button',
                   name: 'apply',
                   text: 'Apply Changes',
                   command: 'apply-changes',
                   full: true
                 }
               ],
               components: [
                 {
                   type: 'image',
                   attributes: {
                     src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=200&fit=crop',
                     alt: 'Card Image'
                   },
                   classes: ['custom-card__image'],
                   selectable: false,
                   highlightable: false,
                   removable: false,
                   copyable: false,
                   draggable: false
                 },
                 {
                   type: 'div',
                   classes: ['custom-card__content'],
                   selectable: false,
                   highlightable: false,
                   removable: false,
                   copyable: false,
                   draggable: false,
                   components: [
                     {
                       type: 'text',
                       tagName: 'h3',
                       content: 'Card Title',
                       classes: ['custom-card__title'],
                       selectable: false,
                       highlightable: false,
                       removable: false,
                       copyable: false,
                       draggable: false
                     },
                     {
                       type: 'text',
                       tagName: 'p',
                       content: 'Card description goes here...',
                       classes: ['custom-card__description'],
                       selectable: false,
                       highlightable: false,
                       removable: false,
                       copyable: false,
                       draggable: false
                     },
                     {
                       type: 'link',
                       content: 'Click Me',
                       attributes: { href: 'https://www.google.com' },
                       classes: ['custom-card__button'],
                       selectable: false,
                       highlightable: false,
                       removable: false,
                       copyable: false,
                       draggable: false
                     }
                   ]
                 }
               ]
            },
            init() {
              this.on('change:imageUrl', this.updateImage);
              this.on('change:title', this.updateTitle);
              this.on('change:description', this.updateDescription);
              this.on('change:buttonLabel', this.updateButtonLabel);
              this.on('change:buttonLink', this.updateButtonLink);
              this.updateImage();
              this.updateTitle();
              this.updateDescription();
              this.updateButtonLabel();
              this.updateButtonLink();
            },
         updateImage() {
           const imageUrl = this.get('imageUrl');
           const imageEl = this.find('img')[0];
           if (imageEl) {
             imageEl.set('src', imageUrl || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=200&fit=crop');
           }
         },
            updateTitle() {
              const title = this.get('title');
              const titleEl = this.find('.custom-card__title')[0];
              if (titleEl) {
                titleEl.set('content', title || 'Card Title');
              }
            },
            updateDescription() {
              const description = this.get('description');
              const descEl = this.find('.custom-card__description')[0];
              if (descEl) {
                descEl.set('content', description || 'Card description goes here...');
              }
            },
            updateButtonLabel() {
              const buttonLabel = this.get('buttonLabel');
              const buttonEl = this.find('.custom-card__button')[0];
              if (buttonEl) {
                buttonEl.set('content', buttonLabel || 'Click Me');
              }
            },
            updateButtonLink() {
              const buttonLink = this.get('buttonLink');
              const buttonEl = this.find('.custom-card__button')[0];
              if (buttonEl) {
                buttonEl.set('href', buttonLink || 'https://www.google.com');
                buttonEl.set('onclick', `(function(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  if ('${buttonLink}' && '${buttonLink}' !== '#') {
                    window.open('${buttonLink}', '_blank');
                  } else {
                    window.open('https://www.google.com', '_blank');
                  }
                })(event)`);
              }
            }
          },
           view: {
             init() {
               this.listenTo(this.model, 'change:imageUrl', this.updateImage);
               this.listenTo(this.model, 'change:title', this.updateTitle);
               this.listenTo(this.model, 'change:description', this.updateDescription);
               this.listenTo(this.model, 'change:buttonLabel', this.updateButtonLabel);
               this.listenTo(this.model, 'change:buttonLink', this.updateButtonLink);
               
               this.el.addEventListener('click', (e) => {

                 if (e.target.classList.contains('custom-card__button') || 
                     e.target.closest('.custom-card__button')) {
                   return;
                 }
                 e.stopPropagation();
                 this.model.trigger('active');
               });
             },
            updateImage() {
              const imageUrl = this.model.get('imageUrl');
              const img = this.el.querySelector('img');
              if (img) {
                img.src = imageUrl || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=200&fit=crop';
              }
            },
            updateTitle() {
              const title = this.model.get('title');
              const titleEl = this.el.querySelector('.custom-card__title');
              if (titleEl) {
                titleEl.innerHTML = title || 'Card Title';
              }
            },
            updateDescription() {
              const description = this.model.get('description');
              const descEl = this.el.querySelector('.custom-card__description');
              if (descEl) {
                descEl.innerHTML = description || 'Card description goes here...';
              }
            },
            updateButtonLabel() {
              const buttonLabel = this.model.get('buttonLabel');
              const buttonEl = this.el.querySelector('.custom-card__button');
              if (buttonEl) {
                buttonEl.innerHTML = buttonLabel || 'Click Me';
              }
            },
            updateButtonLink() {
              const buttonLink = this.model.get('buttonLink');
              const buttonEl = this.el.querySelector('.custom-card__button');
              if (buttonEl) {
                buttonEl.href = buttonLink || 'https://www.google.com';
                
                buttonEl.onclick = (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (buttonLink && buttonLink !== '#') {
                    window.open(buttonLink, '_blank');
                  } else {
                    window.open('https://www.google.com', '_blank');
                  }
                };
              }
            }
          }
        });

        editor.BlockManager.add('custom-card', {
          label: 'Custom Card',
          category: 'Custom Components',
          content: { type: 'custom-card' },
          media: `<svg viewBox="0 0 24 24" fill="currentColor" style="width: 100%; height: 100%;">
            <rect x="3" y="3" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
            <circle cx="8" cy="8" r="2" fill="currentColor"/>
            <path d="M14 12l-2-2-4 4" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>`
        });

        editor.BlockManager.add('text', {
          label: 'Text',
          category: 'Basic',
          content: { type: 'text', content: 'Insert your text here' },
          media: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`
        });

        const rootComponent = editor.DomComponents.getWrapper();
        if (rootComponent) {
          rootComponent.set('droppable', true);
        }

         editor.Commands.add('apply-changes', {
           run: (editor, sender, options) => {
             const selected = editor.getSelected();
             if (selected && selected.get('type') === 'custom-card') {
               const traitContainer = document.querySelector('#trait-manager');
               
               if (traitContainer) {
                 const inputs = Array.from(traitContainer.querySelectorAll('input, textarea'));
                 
                 const imageUrlInput = inputs[0];
                 const titleInput = inputs[1];
                 const descriptionInput = inputs[2];
                 const buttonLabelInput = inputs[3];
                 const buttonLinkInput = inputs[4];
                 
                 if (imageUrlInput) {
                   selected.set('imageUrl', imageUrlInput.value);
                 }
                 if (titleInput) {
                   selected.set('title', titleInput.value);
                 }
                 if (descriptionInput) {
                   selected.set('description', descriptionInput.value);
                 }
                 if (buttonLabelInput) {
                   selected.set('buttonLabel', buttonLabelInput.value);
                 }
                 if (buttonLinkInput) {
                   selected.set('buttonLink', buttonLinkInput.value);
                 }
               }
             }
           }
         });

        editor.on('component:add', (component) => {
          if (component.get('type') === 'custom-card') {
            setTimeout(() => {
              editor.select(component);
            }, 100);
          }
        });

        editor.on('component:update', (component) => {
          if (component.get('type') === 'custom-card') {
            setTimeout(() => {
              const button = component.getEl().querySelector('.custom-card__button');
              if (button) {
                button.addEventListener('click', (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const href = button.getAttribute('href');
                  if (href && href !== '#') {
                    window.open(href, '_blank');
                  } else {
                    window.open('https://www.google.com', '_blank');
                  }
                });
              }
            }, 100);
          }
        });

        const canvas = editor.Canvas.getFrameEl();
        if (canvas) {
          canvas.addEventListener('click', (e) => {
            const button = e.target.closest('.custom-card__button');
            if (button) {
              e.preventDefault();
              e.stopPropagation();
              const href = button.getAttribute('href');
              if (href && href !== '#') {
                window.open(href, '_blank');
              } else {
                window.open('https://www.google.com', '_blank');
              }
            }
          });
        }

      });

      editorRef.current = editor;
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  const exportHTML = () => {
    if (editorRef.current) {
      const components = editorRef.current.DomComponents.getComponents();
      components.forEach(component => {
        if (component.get('type') === 'custom-card') {

          component.trigger('change:buttonLink');
        }
      });
      
      let html = editorRef.current.getHtml();
      const css = editorRef.current.getCss();
      
      components.forEach(component => {
        if (component.get('type') === 'custom-card') {
          const buttonLink = component.get('buttonLink');
          if (buttonLink && buttonLink !== 'https://www.google.com') {
            html = html.replace(/href="[^"]*"/g, `href="${buttonLink}"`);
          }
        }
      });
      const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Card Design</title>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            margin: 0; 
            padding: 20px; 
            background: #f7fafc; 
        }
        .custom-card {
            background: #f7fafc !important;
            border-radius: 0 !important;
            pointer-events: auto !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        .custom-card__content {
            background: #f7fafc !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
        }
        .custom-card__image {
            border-radius: 0 !important;
        }
        /* Override all GrapesJS styles */
        * {
            box-shadow: none !important;
        }
        .custom-card, .custom-card * {
            box-shadow: none !important;
            border: none !important;
            background: #f7fafc !important;
        }
        .custom-card__image {
            background: transparent !important;
        }
        .custom-card {
            border: none !important;
            border-radius: 0 !important;
            padding: 0 !important;
            max-width: none !important;
            margin: 0 !important;
            background: #f7fafc !important;
            box-shadow: none !important;
            transition: none !important;
        }
        .custom-card:hover {
            transform: none !important;
            box-shadow: none !important;
        }
        .custom-card * {
            pointer-events: auto !important;
        }
        .custom-card__button {
            cursor: pointer !important;
            pointer-events: auto !important;
            z-index: 10000 !important;
            position: relative !important;
            display: inline-block !important;
            text-decoration: none !important;
            color: white !important;
            background: #667eea !important;
            padding: 12px 24px !important;
            border-radius: 6px !important;
            font-weight: 600 !important;
            font-size: 1rem !important;
            transition: background-color 0.2s ease-in-out !important;
            box-shadow: none !important;
            border: none !important;
        }
        .custom-card__button:hover {
            opacity: 0.8 !important;
            background: #5a67d8 !important;
            box-shadow: none !important;
        }
        ${css}
    </style>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.custom-card__button');
        
        buttons.forEach(button => {
            // Set target to open in new window
            button.target = '_blank';
            button.rel = 'noopener noreferrer';
            
            // Simple click handler - no preventDefault
            button.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href && href !== '#') {
                    window.open(href, '_blank');
                } else {
                    window.open('https://www.google.com', '_blank');
                }
            });
        });
    });
</script>

</head>
<body>
    ${html}
</body>
</html>`;

      const blob = new Blob([fullHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'card-design.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const clearCanvas = () => {
    if (editorRef.current) {
      editorRef.current.setComponents('');
      editorRef.current.setStyle('');
    }
  };

  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw', 
      display: 'flex', 
      flexDirection: 'column',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      <header style={{
        background: 'white',
        padding: '16px 24px',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        flexShrink: 0
      }}>
        <h1 style={{ 
          color: '#2d3748', 
          fontSize: '1.5rem', 
          fontWeight: '600',
          margin: 0
        }}>
          GrapesJS Card Builder
        </h1>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={exportHTML} 
            style={{
              padding: '8px 16px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: '#667eea',
              color: 'white'
            }}
            onMouseOver={(e) => e.target.style.background = '#5a67d8'}
            onMouseOut={(e) => e.target.style.background = '#667eea'}
          >
            Export HTML
          </button>
          <button 
            onClick={clearCanvas}
            style={{
              padding: '8px 16px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: '#e2e8f0',
              color: '#4a5568'
            }}
            onMouseOver={(e) => e.target.style.background = '#cbd5e0'}
            onMouseOut={(e) => e.target.style.background = '#e2e8f0'}
          >
            Clear Canvas
          </button>
        </div>
      </header>
      
      <div style={{ 
        display: 'flex', 
        height: 'calc(100vh - 80px)',
        width: '100vw',
        flex: 1
      }}>
        <div style={{ width: '200px', background: 'white', borderRight: '1px solid #e2e8f0', overflowY: 'auto' }}>
          <div style={{ padding: '20px', borderBottom: '1px solid #e2e8f0' }}>
            <h3 style={{ color: '#2d3748', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Components</h3>
            <div id="block-manager" style={{ background: '#f7fafc', borderRadius: '6px', minHeight: '120px', padding: '12px' }}></div>
          </div>
          <div style={{ padding: '20px', borderBottom: '1px solid #e2e8f0' }}>
            <h3 style={{ color: '#2d3748', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Layers</h3>
            <div id="layer-manager" style={{ background: '#f7fafc', borderRadius: '6px', minHeight: '120px', padding: '12px' }}></div>
          </div>
        </div>
        
        <div style={{ 
          flex: 1, 
          background: '#f7fafc', 
          padding: '20px', 
          overflowY: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          <div id="grapesjs-editor" style={{ width: '100%', maxWidth: '1200px' }}></div>
        </div>
        
        <div style={{ 
          width: '320px', 
          background: 'white', 
          borderLeft: '1px solid #e2e8f0', 
          overflowY: 'auto',
          flexShrink: 0
        }}>
          <div style={{ padding: '20px', borderBottom: '1px solid #e2e8f0' }}>
            <h3 style={{ color: '#2d3748', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Properties</h3>
            <div id="trait-manager" style={{ background: '#f7fafc', borderRadius: '6px', minHeight: '120px', padding: '12px' }}></div>
          </div>
          <div style={{ padding: '20px' }}>
            <h3 style={{ color: '#2d3748', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Styles</h3>
            <div id="style-manager" style={{ background: '#f7fafc', borderRadius: '6px', minHeight: '120px', padding: '12px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrapesJSCardBuilder