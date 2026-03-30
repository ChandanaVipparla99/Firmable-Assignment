import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import metadata from './block.json';
import './style.css';

const COMPANIES = [
    { name: 'Atlassian', color: '#0052CC' },
    { name: 'Salesforce', color: '#00A1E0' },
    { name: 'HubSpot',   color: '#FF7A59' },
    { name: 'Zendesk',   color: '#03363D' },
    { name: 'Intercom',  color: '#286EFA' },
    { name: 'Notion',    color: '#000000' },
];

function BuildingIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M3 9h6"/><path d="M3 15h6"/><path d="M15 3v18"/><path d="M15 9h6"/><path d="M15 15h6"/>
        </svg>
    );
}

registerBlockType( metadata.name, {
    edit( { attributes, setAttributes } ) {
        const { label } = attributes;
        const blockProps = useBlockProps( { className: 'flb-logos' } );
        return (
            <section { ...blockProps }>
                <div className="flb-logos__inner">
                    <RichText
                        tagName="p"
                        className="flb-logos__label"
                        value={ label }
                        onChange={ ( v ) => setAttributes( { label: v } ) }
                        allowedFormats={ [] }
                    />
                    <div className="flb-logos__grid">
                        { COMPANIES.map( ( co ) => (
                            <div
                                key={ co.name }
                                className="flb-logos__pill"
                                style={ {
                                    borderColor: co.color + '33',
                                    background:  co.color + '0D',
                                    color: co.color,
                                } }
                            >
                                <BuildingIcon />
                                { co.name }
                            </div>
                        ) ) }
                    </div>
                </div>
            </section>
        );
    },

    save( { attributes } ) {
        const { label } = attributes;
        const blockProps = useBlockProps.save( { className: 'flb-logos' } );
        return (
            <section { ...blockProps }>
                <div className="flb-logos__inner">
                    <RichText.Content tagName="p" className="flb-logos__label" value={ label } />
                    <div className="flb-logos__grid">
                        { COMPANIES.map( ( co ) => (
                            <div
                                key={ co.name }
                                className="flb-logos__pill"
                                style={ {
                                    borderColor: co.color + '33',
                                    background:  co.color + '0D',
                                    color: co.color,
                                } }
                            >
                                <BuildingIcon />
                                { co.name }
                            </div>
                        ) ) }
                    </div>
                </div>
            </section>
        );
    },
} );
