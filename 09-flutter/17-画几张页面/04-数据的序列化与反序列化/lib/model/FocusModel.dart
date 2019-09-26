// {
//     "_id": "67890fsadf56789fsadf",
//     "title": "手机",
//     "status": "1",
//     "url": "abc"
// }
class FocusModel {
  String sId;
  String title;
  String status;
  String url;

  FocusModel({this.sId, this.title, this.status, this.url});

  FocusModel.fromJson(Map<String, dynamic> json) {
    sId = json['_id'];
    title = json['title'];
    status = json['status'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['_id'] = this.sId;
    data['title'] = this.title;
    data['status'] = this.status;
    data['url'] = this.url;
    return data;
  }
}










