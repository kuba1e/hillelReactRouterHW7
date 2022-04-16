import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../features/users";

export const useUsersData = () => {
  const usersData = useSelector(({ users: { usersData } }) => usersData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return usersData;
};
