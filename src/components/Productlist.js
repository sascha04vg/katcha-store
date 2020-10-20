import React, {useState} from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import styled from "styled-components";

const Productlist = () => {
    const [search, setSearch] = useState('')

  function handleClick() {
    setSearch('')
    document.querySelectorAll('input').forEach(input => (input.value = ''))
    document.querySelectorAll('input').forEach(input => (input.checked = false))
  }
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title title="Shop" />
            <Filter className="filters">
              <input id="all" type="radio" name="products" value="" onChange={e => setSearch(e.target.value)} />
              <label htmlFor="all">All</label>
              <input id="comic" type="radio" name="products" value="comic" onChange={e => setSearch(e.target.value)} />
              <label htmlFor="comic">Comics</label>
              <input id="postcards" type="radio" name="products" value="postcards" onChange={e => setSearch(e.target.value)} />
              <label htmlFor="postcards">Postcards</label>
              <input id="prints" type="radio" name="products" value="prints" onChange={e => setSearch(e.target.value)} />
              <label htmlFor="prints">Prints</label>
            <input className="search-box" type="text" placeholder="Search..." onChange={e => setSearch(e.target.value)} autoComplete="on"/>
              <button className="btn btn-black btn-lg rest-btn" type="reset" id="clear" value="" onClick={handleClick}>Clear Filters</button>
              <div className="colour-filter">
            <button className="radio-btn red" type="radio" name="colour" id="red" value="red" onClick={e => setSearch(e.target.value)}/>
            <button className="radio-btn orange" type="radio" name="colour" id="orange" value="orange" onClick={e => setSearch(e.target.value)}/> 
            <button className="radio-btn yellow" type="radio" name="colour" id="yellow" value="yellow" onClick={e => setSearch(e.target.value)}/>
            <button className="radio-btn green" type="radio" name="colour" id="green" value="green" onClick={e => setSearch(e.target.value)}/>
            <button className="radio-btn blue" type="radio" name="colour" id="blue" value="blue" onClick={e => setSearch(e.target.value)}/>
            <button className="radio-btn purple" type="radio" name="colour" id="purple" value="purple" onClick={e => setSearch(e.target.value)}/>
            <button className="radio-btn white" type="radio" name="colour" id="white" value="white" onClick={e => setSearch(e.target.value)}/>
              </div>

          </Filter>
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  const filterdProducts = value.products.filter(product => { 
                    console.log(product.tags);
                    return product.tags.toLowerCase().includes(search.toLowerCase())
                  })

                  return filterdProducts.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>

      //<Product />
    );
  }
export default Productlist

const Filter = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;

.search-box{
margin-right: 1rem;
padding: .3rem 1rem;
}

.rest-btn {margin-right: 1rem;}

.radio-btn{
  width: 25px;
  height: 25px;
  border: 1px solid #d6d6d6;
  border-radius: 50%;
  margin-right: .8rem;
}

.red{
  background:#f76360;
}
.orange{
  background:#f6ab42;
}
.yellow{
  background:#f5f592;
}
.green{
  background:#f5f592;
}
.blue{
  background:#99bbc9;
}
.purple{
  background:#c694c3;
}
.white{
  background:#ffffff;
}

input[type=radio] {
  display: none;
}

input[type=radio]:checked+label:before {
  background: var(--peach);
  width: 25px;
  height: 25px;
  border: 0;
  border-radius: 50%;
}


label {
  color: black;
  font-family: arial;
  font-size: 12px;
  position: relative;
  padding-left: 2rem;
  padding-right: 1rem;
  align-items: center;
  justify-content: center
}

label:hover {
  color: var(--peach);
}

label:hover:before {
  border: 1px solid var(--peach);
  border-radius: 50%;
}

label:before {
  content: '';
  height: 25px;
  width: 25px;
  border: 1px solid lightgray;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
}




`