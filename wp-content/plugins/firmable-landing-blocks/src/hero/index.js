import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls, URLInput } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import metadata from './block.json';
import './style.css';

registerBlockType( metadata.name, {
    edit( { attributes, setAttributes } ) {
        const {
            badgeText, headline, gradientText, subheadline,
            ctaPrimaryText, ctaPrimaryUrl, ctaSecondaryText, ctaSecondaryUrl,
        } = attributes;

        const blockProps = useBlockProps( { className: 'flb-hero' } );

        return (
            <>
                <InspectorControls>
                    <PanelBody title="Primary CTA">
                        <TextControl
                            label="Button label"
                            value={ ctaPrimaryText }
                            onChange={ ( v ) => setAttributes( { ctaPrimaryText: v } ) }
                        />
                        <p style={{fontSize:12,marginBottom:4}}>Button URL</p>
                        <URLInput
                            value={ ctaPrimaryUrl }
                            onChange={ ( v ) => setAttributes( { ctaPrimaryUrl: v } ) }
                        />
                    </PanelBody>
                    <PanelBody title="Secondary CTA">
                        <TextControl
                            label="Button label"
                            value={ ctaSecondaryText }
                            onChange={ ( v ) => setAttributes( { ctaSecondaryText: v } ) }
                        />
                        <p style={{fontSize:12,marginBottom:4}}>Button URL</p>
                        <URLInput
                            value={ ctaSecondaryUrl }
                            onChange={ ( v ) => setAttributes( { ctaSecondaryUrl: v } ) }
                        />
                    </PanelBody>
                </InspectorControls>

                <section { ...blockProps }>
                    <div className="flb-hero__bg" aria-hidden="true" />
                    <div className="flb-hero__orb flb-hero__orb--purple" aria-hidden="true" />
                    <div className="flb-hero__orb flb-hero__orb--blue" aria-hidden="true" />

                    <div className="flb-hero__inner">
                        <div className="flb-hero__badge">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                            <RichText
                                tagName="span"
                                value={ badgeText }
                                onChange={ ( v ) => setAttributes( { badgeText: v } ) }
                                allowedFormats={ [] }
                            />
                        </div>

                        <h1 className="flb-hero__headline">
                            <RichText
                                tagName="span"
                                value={ headline }
                                onChange={ ( v ) => setAttributes( { headline: v } ) }
                                allowedFormats={ [] }
                            />
                            { ' ' }
                            <span className="flb-hero__gradient-text">
                                <RichText
                                    tagName="span"
                                    value={ gradientText }
                                    onChange={ ( v ) => setAttributes( { gradientText: v } ) }
                                    allowedFormats={ [] }
                                />
                            </span>
                        </h1>

                        <RichText
                            tagName="p"
                            className="flb-hero__sub"
                            value={ subheadline }
                            onChange={ ( v ) => setAttributes( { subheadline: v } ) }
                            allowedFormats={ [] }
                        />

                        <div className="flb-hero__ctas">
                            <span className="flb-btn flb-btn--primary">
                                <RichText
                                    tagName="span"
                                    value={ ctaPrimaryText }
                                    onChange={ ( v ) => setAttributes( { ctaPrimaryText: v } ) }
                                    allowedFormats={ [] }
                                />
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                            </span>
                            <span className="flb-btn flb-btn--secondary">
                                <RichText
                                    tagName="span"
                                    value={ ctaSecondaryText }
                                    onChange={ ( v ) => setAttributes( { ctaSecondaryText: v } ) }
                                    allowedFormats={ [] }
                                />
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                            </span>
                        </div>

                        <div className="flb-hero__stats">
                            { [
                                { value: '25M+', label: 'Company Profiles', color: '#6366F1' },
                                { value: '95%',  label: 'Data Accuracy',    color: '#0EA5E9' },
                                { value: '3x',   label: 'Pipeline Growth',  color: '#F59E0B' },
                                { value: '10k+', label: 'Happy Customers',  color: '#10B981' },
                            ].map( ( s ) => (
                                <div key={ s.label } className="flb-hero__stat">
                                    <span className="flb-hero__stat-value" style={ { color: s.color } }>{ s.value }</span>
                                    <span className="flb-hero__stat-label">{ s.label }</span>
                                </div>
                            ) ) }
                        </div>
                    </div>
                </section>
            </>
        );
    },

    save( { attributes } ) {
        const { badgeText, headline, gradientText, subheadline, ctaPrimaryText, ctaPrimaryUrl, ctaSecondaryText, ctaSecondaryUrl } = attributes;
        const blockProps = useBlockProps.save( { className: 'flb-hero' } );

        return (
            <section { ...blockProps }>
                <div className="flb-hero__bg" aria-hidden="true" />
                <div className="flb-hero__orb flb-hero__orb--purple" aria-hidden="true" />
                <div className="flb-hero__orb flb-hero__orb--blue" aria-hidden="true" />

                <div className="flb-hero__inner">
                    <div className="flb-hero__badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        <RichText.Content tagName="span" value={ badgeText } />
                    </div>

                    <h1 className="flb-hero__headline">
                        <RichText.Content tagName="span" value={ headline } />
                        { ' ' }
                        <span className="flb-hero__gradient-text">
                            <RichText.Content tagName="span" value={ gradientText } />
                        </span>
                    </h1>

                    <RichText.Content tagName="p" className="flb-hero__sub" value={ subheadline } />

                    <div className="flb-hero__ctas">
                        <a href={ ctaPrimaryUrl } className="flb-btn flb-btn--primary">
                            <RichText.Content tagName="span" value={ ctaPrimaryText } />
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </a>
                        <a href={ ctaSecondaryUrl } className="flb-btn flb-btn--secondary">
                            <RichText.Content tagName="span" value={ ctaSecondaryText } />
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        </a>
                    </div>

                    <div className="flb-hero__stats">
                        { [
                            { value: '25M+', label: 'Company Profiles', color: '#6366F1' },
                            { value: '95%',  label: 'Data Accuracy',    color: '#0EA5E9' },
                            { value: '3x',   label: 'Pipeline Growth',  color: '#F59E0B' },
                            { value: '10k+', label: 'Happy Customers',  color: '#10B981' },
                        ].map( ( s ) => (
                            <div key={ s.label } className="flb-hero__stat">
                                <span className="flb-hero__stat-value" style={ { color: s.color } }>{ s.value }</span>
                                <span className="flb-hero__stat-label">{ s.label }</span>
                            </div>
                        ) ) }
                    </div>
                </div>
            </section>
        );
    },
} );
