import { Dimensions } from 'react-native';

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

export function trimString(str = '', length = 50) {
  if (!str) return 'Ẩn danh';
  return str.length > length - 3 ? str.substring(0, length - 3) + '...' : str;
}

export const allTabs = [
  {
    id: 'Tổng quan',
    title: 'General',
  },
  {
    id: 'Thời sự',
    title: 'News',
  },
  {
    id: 'Thế giới',
    title: 'World',
  },
  {
    id: 'Pháp luật',
    title: 'Legal',
  },
  {
    id: 'Kinh doanh',
    title: 'Business',
  },
  {
    id: 'Công nghệ',
    title: 'Technology',
  },
  {
    id: 'Xe',
    title: 'Car',
  },
  {
    id: 'Du lịch',
    title: 'Travel',
  },
  {
    id: 'Nhịp sống trẻ',
    title: 'Lifestyle',
  },
  {
    id: 'Văn hóa',
    title: 'Culture',
  },
  {
    id: 'Giải trí',
    title: 'Entertainment',
  },
  {
    id: 'Thể thao',
    title: 'Sports',
  },
  {
    id: 'Giáo dục',
    title: 'Education',
  },
  {
    id: 'Nhà đất',
    title: 'Real Estate',
  },
  {
    id: 'Sức khỏe',
    title: 'Health',
  },
  {
    id: 'Giả thật',
    title: 'Fact',
  },
  {
    id: 'Bạn đọc làm báo',
    title: 'Shared',
  },
  {
    id: 'Cần biết',
    title: 'Need To Know',
  },
  {
    id: 'Thư giãn',
    title: 'Relax',
  },
  {
    id: 'Việc làm',
    title: 'Job',
  },

];

/*
export function convertApiDate(api_date) {
  const date = new Date(api_date);
  var day = date.getDay();
  return (
    (day === 0 ? 'Chủ nhật' : `Thứ ${day}`) +
    ', ' +
    date.getDate() +
    '/' +
    (date.getMonth() + 1) +
    '/' +
    date.getFullYear()
  );
}
*/
