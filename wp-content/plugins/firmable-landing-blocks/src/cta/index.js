import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls, URLInput } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

function UsersIcon() {
    return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
}
function ArrowIcon() {
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
}
function BarIcon() {
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;
}

registerBlockType( metadata.name, {
    edit( { attributes, setAttributes } ) {
        const { badgeText, headline, subheadline, ctaPrimaryText, ctaPrimaryUrl, ctaSecondaryText, ctaSecondaryUrl, footnote } = attributes;
        const blockProps = useBlockProps( { className: 'flb-cta' } );

        return (
            <>
                <InspectorControls>
                    <PanelBody title="Primary Button">
                        <TextControl label="Label" value={ ctaPrimaryText } onChange={ ( v ) => setAttributes( { ctaPrimaryText: v } ) } />
                        <p style={{fontSize:12,marginBottom:4}}>URL</p>
                        <URLInput value={ ctaPrimaryUrl } onChange={ ( v ) => setAttributes( { ctaPrimaryUrl: v } ) } />
                    </PanelBody>
                    <PanelBody title="Secondary Button">
                        <TextControl label="Label" value={ ctaSecondaryText } onChange={ ( v ) => setAttributes( { ctaSecondaryText: v } ) } />
                        <p style={{fontSize:12,marginBottom:4}}>URL</p>
                        <URLInput value={ ctaSecondaryUrl } onChange={ ( v ) => setAttributes( { ctaSecondaryUrl: v } ) } />
                    </PanelBody>
                </InspectorControls>

                <section { ...blockProps }>
                    <div className="flb-cta__card">
                        <div className="flb-cta__blob flb-cta__blob--tr" aria-hidden="true" />
                        <div className="flb-cta__blob flb-cta__blob--bl" aria-hidden="true" />

                        <div className="flb-cta__body">
                            <div className="flb-cta__badge">
                                <UsersIcon />
                                <RichText tagName="span" value={ badgeText } onChange={ ( v ) => setAttributes( { badgeText: v } ) } allowedFormats={ [] } />
                            </div>

                            <RichText tagName="h2" className="flb-cta__headline" value={ headline } onChange={ ( v ) => setAttributes( { headline: v } ) } allowedFormats={ [] } />
                            <RichText tagName="p" className="flb-cta__sub" value={ subheadline } onChange={ ( v ) => setAttributes( { subheadline: v } ) } allowedFormats={ [] } />

                            <div className="flb-cta__buttons">
                                <span className="flb-cta__btn flb-cta__btn--primary">
                                    <RichText tagName="span" value={ ctaPrimaryText } onChange={ ( v ) => setAttributes( { ctaPrimaryText: v } ) } allowedFormats={ [] } />
                                    <ArrowIcon />
                                </span>
                                <span className="flb-cta__btn flb-cta__btn--secondary">
                                    <BarIcon />
                                    <RichText tagName="span" value={ ctaSecondaryText } onChange={ ( v ) => setAttributes( { ctaSecondaryText: v } ) } allowedFormats={ [] } />
                                </span>
                            </div>

                            <RichText tagName="p" className="flb-cta__footnote" value={ footnote } onChange={ ( v ) => setAttributes( { footnote: v } ) } allowedFormats={ [] } />
                        </div>
                    </div>
                </section>
            </>
        );
    },

    save( { attributes } ) {
        const { badgeText, headline, subheadline, ctaPrimaryText, ctaPrimaryUrl, ctaSecondaryText, ctaSecondaryUrl, footnote } = attributes;
        const blockProps = useBlockProps.save( { className: 'flb-cta' } );

        return (
            <section { ...blockProps }>
                <div className="flb-cta__card">
                    <div className="flb-cta__blob flb-cta__blob--tr" aria-hidden="true" />
                    <div className="flb-cta__blob flb-cta__blob--bl" aria-hidden="true" />

                    <div className="flb-cta__body">
                        <div className="flb-cta__badge">
                            <UsersIcon />
                            <RichText.Content tagName="span" value={ badgeText } />
                        </div>

                        <RichText.Content tagName="h2" className="flb-cta__headline" value={ headline } />
                        <RichText.Content tagName="p" className="flb-cta__sub" value={ subheadline } />

                        <div className="flb-cta__buttons">
                            <a href={ ctaPrimaryUrl } className="flb-cta__btn flb-cta__btn--primary">
                                <RichText.Content tagName="span" value={ ctaPrimaryText } />
                                <ArrowIcon />
                            </a>
                            <a href={ ctaSecondaryUrl } className="flb-cta__btn flb-cta__btn--secondary">
                                <BarIcon />
                                <RichText.Content tagName="span" value={ ctaSecondaryText } />
                            </a>
                        </div>

                        <RichText.Content tagName="p" className="flb-cta__footnote" value={ footnote } />
                    </div>
                </div>
            </section>
        );
    },
} );
