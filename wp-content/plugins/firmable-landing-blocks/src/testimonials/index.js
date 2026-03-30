import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import metadata from './block.json';
import './style.css';

const TESTIMONIALS = [
    { quote: "Firmable transformed the way our sales team finds and qualifies leads. We 3x'd our pipeline in just 90 days.", name: 'Sarah Chen', title: 'Head of Sales, Planful', avatar: 'SC', color: '#6366F1' },
    { quote: "The data quality is unmatched. We've stopped wasting budget on bad contacts and started closing more deals.", name: 'Marcus Reid', title: 'VP Growth, Koala', avatar: 'MR', color: '#0EA5E9' },
    { quote: "Best B2B intelligence platform we've used. The Australian company data is incredibly accurate and up to date.", name: 'Priya Nair', title: 'Founder & CEO, Coverly', avatar: 'PN', color: '#10B981' },
];

function Stars( { size = 22 } ) {
    return (
        <div className="flb-testimonials__stars" aria-label="5 stars">
            { [ 1,2,3,4,5 ].map( ( i ) => (
                <svg key={ i } width={ size } height={ size } viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="1" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
            ) ) }
        </div>
    );
}

function Card( { t } ) {
    return (
        <div className="flb-testimonials__card">
            <Stars size={ 16 } />
            <p className="flb-testimonials__quote">"{ t.quote }"</p>
            <div className="flb-testimonials__author">
                <div className="flb-testimonials__avatar" style={ { background: t.color } }>{ t.avatar }</div>
                <div>
                    <p className="flb-testimonials__name">{ t.name }</p>
                    <p className="flb-testimonials__role">{ t.title }</p>
                </div>
            </div>
        </div>
    );
}

registerBlockType( metadata.name, {
    edit( { attributes, setAttributes } ) {
        const { headline, subheadline } = attributes;
        const blockProps = useBlockProps( { className: 'flb-testimonials' } );

        return (
            <section { ...blockProps }>
                <div className="flb-testimonials__inner">
                    <div className="flb-testimonials__header">
                        <Stars size={ 24 } />
                        <RichText
                            tagName="h2"
                            className="flb-testimonials__headline"
                            value={ headline }
                            onChange={ ( v ) => setAttributes( { headline: v } ) }
                            allowedFormats={ [] }
                        />
                        <RichText
                            tagName="p"
                            className="flb-testimonials__sub"
                            value={ subheadline }
                            onChange={ ( v ) => setAttributes( { subheadline: v } ) }
                            allowedFormats={ [] }
                        />
                    </div>
                    <div className="flb-testimonials__grid">
                        { TESTIMONIALS.map( ( t ) => <Card key={ t.name } t={ t } /> ) }
                    </div>
                </div>
            </section>
        );
    },

    save( { attributes } ) {
        const { headline, subheadline } = attributes;
        const blockProps = useBlockProps.save( { className: 'flb-testimonials' } );

        return (
            <section { ...blockProps }>
                <div className="flb-testimonials__inner">
                    <div className="flb-testimonials__header">
                        <Stars size={ 24 } />
                        <RichText.Content tagName="h2" className="flb-testimonials__headline" value={ headline } />
                        <RichText.Content tagName="p" className="flb-testimonials__sub" value={ subheadline } />
                    </div>
                    <div className="flb-testimonials__grid">
                        { TESTIMONIALS.map( ( t ) => <Card key={ t.name } t={ t } /> ) }
                    </div>
                </div>
            </section>
        );
    },
} );
