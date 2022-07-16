import { render, screen }  from '@testing-library/react';
import { Quotes} from './Quotes';

const quote = 'test quote';
const speaker = 'random speaker';

test('renders received quote, speaker and a button', () => {
    render(<Quotes quote={quote} speaker={speaker}/>)

    const quoteEl = screen.getbyText(quote);
    const speakerEl = screen.getbyText(speaker);
    const buttonEl = screen.getByRole('button');

    expect(quoteEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
});