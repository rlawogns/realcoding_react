function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

  return (
    <div className="CityListMain">
      <h1 className = "CityTitle">CityList</h1>

      <ul className = "lists">
        {cities.map((item, index) => {
          var items={item}
          return <li key={index}>
          <a href= {'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query='+item}> {item}</a></li>;
        })}
      </ul>
    </div>
  );
}

export default CityList;
