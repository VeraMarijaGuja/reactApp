import './FilterAmenities.css';

let FilterAmenities = (props) => {

    const onFilterValueChange = (event) => {
       props.filterValueSelected(event.target.value);
    }

    return (<div className="filter-area">
        Filter by amenities: 
        <select name="amenities"  onChange={onFilterValueChange}>
        <option value="all">All</option>
            <option value="airConditioning">Air Conditioning</option>
            <option value="parkingSpace">Parking Space</option>
            <option value="pets">Pets</option>
            <option value="pool">Pool</option>
            <option value="wifi">Wifi</option>
            <option value="tv">Tv</option>
        
        </select>
    </div>)
}

export default FilterAmenities;