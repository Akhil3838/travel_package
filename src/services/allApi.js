import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


// get all packages

export const getAllPackages = async (filter = {}) => {
  let query = "";
  const params = new URLSearchParams();

  if (filter.categoryIds?.length) {
    params.append("category_id", filter.categoryIds.join(","));
  }
  if (filter.days?.length) {
    params.append("days", filter.days.join(","));
  }
  if (filter.minPrice !== undefined) {
    params.append("min_price", filter.minPrice);
  }
  if (filter.maxPrice !== undefined) {
    params.append("max_price", filter.maxPrice);
  }
  if (filter.page !== undefined) {
    params.append("page", filter.page);
  }

  // Only build query if there are params
  if ([...params].length > 0) {
    query = `?${params.toString()}`;
  }

  return await commonApi("GET", `${serverUrl}/get-allpackages${query}`, "", "");
};
// get signle packages

export const getSinglePackages=async(id)=>{
    return await commonApi('GET',`${serverUrl}/get-packageDetails/${id}`,"","")
}

// Trending packages
export const getTrendingPkg=async()=>{
    return await commonApi('GET',`${serverUrl}/get-trendingpackages`,"","")
}

// get filter datas

export const PackageFilters=async()=>{
    return await commonApi('GET',`${serverUrl}/get-filters`,"","")
}

//get category

export const getCategories=async()=>{
    return await commonApi('GET',`${serverUrl}/get-categories`,"","")
}

//save enquery

export const saveEnquery=async(reqBody)=>{
    
    return await commonApi('POST',`${serverUrl}/save-enquiry`,reqBody,"")
}
// new packages

// Trending packages
export const getNewPkg=async()=>{
    return await commonApi('GET',`${serverUrl}/get-newpackages`,"","")
}

//search packages
export const searchPackageApi =async(search)=>{
    return await commonApi('GET',`${serverUrl}/search-package?search=${search}`,"","")
}

export const searchAi = async (reqBody) => {
  const res = await commonApi("POST", `${serverUrl}/search-travel`, reqBody, "");
  return res.data; // ✅ only return the payload
};


export const getuserData=async()=>{
    return await commonApi('GET',`${serverUrl}/get-allData`,"","")
}

// search bus
export const getSearchBus = async ({
  departure,
  destination,
  travel_date,
  passengers,
  min_price,
  max_price,
} = {}) => {
  const params = new URLSearchParams();

  if (departure) params.append("departure", departure);
  if (destination) params.append("destination", destination);
  if (travel_date) params.append("travel_date", travel_date);
  if (passengers) params.append("passengers", passengers);
  if (min_price) params.append("min_price", min_price);
  if (max_price) params.append("max_price", max_price);

  return commonApi("GET", `${serverUrl}/search-bus?${params.toString()}`, "", "");
};

export const saveBooking=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/save-booking`,reqBody,"")
}

