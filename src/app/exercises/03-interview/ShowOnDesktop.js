'use client';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

export default function ShowOnDesktop({
  children,
}) {
  const [show, setShow] = React.useState(false);

  const isDesktop = useMediaQuery({
    query: '(min-width: 500px)',
  });

  React.useEffect(() => {
    setShow(isDesktop);
  }, [isDesktop]);

  return show ? children : null;
}
