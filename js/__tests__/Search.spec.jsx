import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import ShowCard from '../ShowCard';
import preload from '../../data.json';

test('Search renders corectly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Sarch should render corect amount of shows', () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Sarch should render corect amount of shows baset on search term', () => {
  const searchWord = 'black';
  const component = shallow(<Search />);
  component.find('input').simulate('change', { target: { value: searchWord } });
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toLowerCase().indexOf(searchWord) !== -1
  );

  expect(component.find(ShowCard).length).toEqual(showCount.length);
});
