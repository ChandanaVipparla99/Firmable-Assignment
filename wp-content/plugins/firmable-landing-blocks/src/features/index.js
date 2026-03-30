import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import metadata from './block.json';
import './style.css';

const FEATURES = [
    {
        title: '25M+ Company Profiles',
        desc: 'Access the most comprehensive and accurate database of Australian and global companies, with real-time updates across all key firmographic fields.',
        color: '#6366F1', bg: '#EEF2FF',
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    },
    {
        title: 'Smart Lead Discovery',
        desc: 'Use AI-powered filters to pinpoint your ideal customer profile across industry, headcount, revenue, tech stack, and buying signals.',
        color: '#0EA5E9', bg: '#E0F2FE',
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    },
    {
        title: 'Real-Time Intent Data',
        desc: 'Identify companies actively researching your solution. Reach out when buyers are ready, not when they\'ve already decided.',
        color: '#F59E0B', bg: '#FEF3C7',
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    },
    {
        title: 'GDPR & Privacy Compliant',
        desc: 'All data sourced and processed in full compliance with GDPR, CCPA, and Australian Privacy Act. Enterprise-grade security built in.',
        color: '#10B981', bg: '#ECFDF5',
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    },
];

const EXTRAS = ['CRM Integrations','Chrome Extension','Email Verification','Org Charts','Technographics','API Access'];

function CheckIcon() {
    return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>;
}

function ArrowIcon() {
    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
}

registerBlockType( metadata.name, {
    edit( { attributes, setAttributes } ) {
        const { sectionLabel, headline, subheadline } = attributes;
        const blockProps = useBlockProps( { className: 'flb-features' } );

        return (
            <section { ...blockProps }>
                <div className="flb-features__inner">
                    <div className="flb-features__header">
                        <RichText
                            tagName="span"
                            className="flb-features__label"
                            value={ sectionLabel }
                            onChange={ ( v ) => setAttributes( { sectionLabel: v } ) }
                            allowedFormats={ [] }
                        />
                        <RichText
                            tagName="h2"
                            className="flb-features__headline"
                            value={ headline }
                            onChange={ ( v ) => setAttributes( { headline: v } ) }
                            allowedFormats={ [] }
                        />
                        <RichText
                            tagName="p"
                            className="flb-features__sub"
                            value={ subheadline }
                            onChange={ ( v ) => setAttributes( { subheadline: v } ) }
                            allowedFormats={ [] }
                        />
                    </div>

                    <div className="flb-features__grid">
                        { FEATURES.map( ( f ) => (
                            <div key={ f.title } className="flb-features__card">
                                <div className="flb-features__icon" style={ { background: f.bg } }>
                                    <span style={ { color: f.color } }>{ f.icon }</span>
                                </div>
                                <h3 className="flb-features__card-title">{ f.title }</h3>
                                <p className="flb-features__card-desc">{ f.desc }</p>
                                <span className="flb-features__link" style={ { color: f.color } }>
                                    Learn more <ArrowIcon />
                                </span>
                            </div>
                        ) ) }
                    </div>

                    <div className="flb-features__extras">
                        { EXTRAS.map( ( item ) => (
                            <div key={ item } className="flb-features__extra">
                                <CheckIcon /> { item }
                            </div>
                        ) ) }
                    </div>
                </div>
            </section>
        );
    },

    save( { attributes } ) {
        const { sectionLabel, headline, subheadline } = attributes;
        const blockProps = useBlockProps.save( { className: 'flb-features' } );

        return (
            <section { ...blockProps }>
                <div className="flb-features__inner">
                    <div className="flb-features__header">
                        <RichText.Content tagName="span" className="flb-features__label" value={ sectionLabel } />
                        <RichText.Content tagName="h2" className="flb-features__headline" value={ headline } />
                        <RichText.Content tagName="p" className="flb-features__sub" value={ subheadline } />
                    </div>

                    <div className="flb-features__grid">
                        { FEATURES.map( ( f ) => (
                            <div key={ f.title } className="flb-features__card">
                                <div className="flb-features__icon" style={ { background: f.bg } }>
                                    <span style={ { color: f.color } } aria-hidden="true">{ f.icon }</span>
                                </div>
                                <h3 className="flb-features__card-title">{ f.title }</h3>
                                <p className="flb-features__card-desc">{ f.desc }</p>
                                <span className="flb-features__link" style={ { color: f.color } }>
                                    Learn more <ArrowIcon />
                                </span>
                            </div>
                        ) ) }
                    </div>

                    <div className="flb-features__extras">
                        { EXTRAS.map( ( item ) => (
                            <div key={ item } className="flb-features__extra">
                                <CheckIcon /> { item }
                            </div>
                        ) ) }
                    </div>
                </div>
            </section>
        );
    },
} );
