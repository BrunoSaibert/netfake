import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'card',
})`
  display: flex;
  overflow: hidden;

  flex: 0 0 calc(100% / 5);
  padding: 2px;
  position: relative;
  z-index: 1;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.6) !important;

    & ~ div {
      transform: translateX(30%);
    }
  }
`;
export const Banner = styled.img`
  width: 100%;
  height: auto;
`;
export const Content = styled.div`
  opacity: 0;
`;
export const Title = styled.h3``;

//  export const Card = styled.div.attrs({
//   className: 'card',
// })`
//   display: flex;
//   overflow: hidden;
//   position: relative;

//   cursor: pointer;

//   &:hover {
//     .content {
//       transition: all 0.6s;
//       transition-delay: 0.3s;
//       opacity: 1;
//     }
//   }
// `;

// export const Banner = styled.img`
//   width: 100%;
//   height: auto;
// `;
// export const Content = styled.div.attrs({
//   className: 'content',
// })`
//   z-index: 1;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   padding: 5px 10px;
//   width: 100%;
//   height: 100%;

//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   flex-direction: column;

//   opacity: 0;
//   transition-delay: 0.3s;

//   background: #14141430;
//   background-image: url(${props => props.bgImg});
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// `;

// export const Overlay = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-wrap: nowrap;
//   flex-direction: row;
//   width: 100%;
// `;

// export const Overview = styled.div`
//   flex: 1;
//   min-width: 0;
// `;

// export const Title = styled.p`
//   font-size: 12px;
//   margin: 5px 0;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// export const Presentation = styled.p`
//   font-size: 12px;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// export const Actions = styled.div`
//   flex: 1;
//   margin-left: 10px;

//   flex: 0 0 1px;
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
//   flex-direction: column;
// `;

// export const Chevron = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   margin-top: 5px;
// `;
