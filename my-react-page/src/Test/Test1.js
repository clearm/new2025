
import { people } from './Test1_data.js';
import { getImageUrl } from './utils.js';



const Test1 = () => {

    let guest = 0;

    function Cup() { // 컴포넌트 안에 다른 컴포넌트를 정의 하지 말라는데 난...했네... 헐... 느리고, 버그를 발생한다고 하네...
      // Bad: changing a preexisting variable!
      guest = guest + 1;
      return <h2>Tea cup for guest #{guest}</h2>;
    }

    function Cup2({ guest }) {
      return <h2>Tea cup for guest #{guest}</h2>;
    }

    const person = {
        name: 'Gregorio Y. Zara',
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    };

    let tt = [1, 2, 3].map((x) => x * 2)  // [2, 4, 6]

    const listItems = people.map(person =>
        <li key={person.id}>
          <img
            src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>
     );

    return ( // 여러줄의 경우 괄호 필수, 한줄의 경우 필요 없음.
       <div>
        <p> Pitfall = 함정 </p>
        <p> {tt} </p>

        <div style={person.theme}>
           <h3> {person.name} </h3>
           <ul> {listItems} </ul>
        </div>

        <Cup />
        <Cup />
        <Cup />

        <Cup2 guest={1} />
        <Cup2 guest={2} />
        <Cup2 guest={3} />

        <Cup3 guest={1}  />
        <Cup3 guest={1}  />
        <Cup3 guest={1}  />

        <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh'
        }}
      />

       </div>
    )

}

function Cup3({guest}) { // 컴포넌트 밖에다 정의하고 props 을 통해 데이타를 전달하라는데... 부모 => 자식 값전달.
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

// function Avatar({ person, size = 100 }) {  // default 값 설정도 가능.
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

function Avatar(props) { // 이렇게 하나로 처리할 수도 있다. 이걸 desctructuring=구조분해 이라고 한다.
  return (
    <img
      className="avatar"
      src={getImageUrl(props.person)}
      alt={props.person.name}
      width={props.size}
      height={props.size}
    />
  );
}

// “spread” syntax
// <Avatar
//  person={person}
//  size={size}
//  isSepia={isSepia}
//  thickBorder={thickBorder}
// />

// 이걸 한줄로  <Avatar {...props} />

export default Test1;
