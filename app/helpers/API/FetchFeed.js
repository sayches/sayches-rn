import {
  PostSerializer,
  AuthorizationHeader,
  APIInstance,
} from "../../helpers/API/API";
import axios from "axios";

export const FetchFeed = async (setPostData) => {
  const response = await axios.get(
    APIInstance + PostSerializer,
    AuthorizationHeader
  );
  setPostData(response.data);
};
